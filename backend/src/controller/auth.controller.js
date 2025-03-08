import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "All Fields are required",
      });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "No user found",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(500).json({
        message: "Incorrect Password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure only in production
      sameSite: "strict", // Prevents CSRF attacks
      maxAge: 60 * 60 * 1000, // 1 hour expiry
    });

    return res.status(200).json({
      message: "Login Successful",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(413).json({
      message: "Error in login controller",
      error: error.message,
    });
  }
};

export const signupController = async (req, res) => {
  try {
    const { full_name, username, password } = req.body;
    if (!full_name || !username || !password) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be 6 letters long" });
    }
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({
        message: "user already exists please signup with a unique email",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    const user = await User.create({
      full_name,
      username,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure only in production
      sameSite: "strict", // Prevents CSRF attacks
      maxAge: 60 * 60 * 1000, // 1 hour expiry
    });

    return res
      .status(201)
      .json({ message: "user created Successfully", user, token });
  } catch (error) {
    console.log(error);
    res.status(413).json({
      message: "Error in signup controller",
      error: error.message,
    });
  }
};
