import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:5001/api/v1/auth/login", {
        username,
        password,
      });
      if (user.data) {
        toast.success("Logged in Successfully");
        dispatch(loginUser(user.data.user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold ">Welcome Back!!</h1>
      <div className="max-w-md w-90 mx-auto p-6 bg-white rounded-lg shadow-md ">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-2xl font-bold"
            >
              Username
            </label>
            <input
              type="email"
              value={username}
              id="username"
              name="username"
              placeHolder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-2xl font-bold"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              placeHolder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            ></input>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
          <h3 className="text-xl">
            New User ?{" "}
            <Link to="/signup">
              <span className="text-blue-600 font-bold underline">Signup</span>
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
