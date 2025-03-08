import jwt from "jsonwebtoken";
export const checkUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
        message: "no token found",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error in middleware",
    });
  }
};

export const checkRole = async (req, res, next) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User not logged in" });
    }
    if (req.user.role !== "Admin") {
      return res.status(403).json({
        message: "you cannot access this",
      });
    }
    next();
  } catch (error) {
    console.error("Error in checkRole middleware:", error);
    return res.status(500).json({ message: "Server error in role check" });
  }
};
