import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");
    try {
      const user = await axios.post(
        "http://localhost:5001/api/v1/auth/signup",
        {
          username,
          fullname,
          password,
        }
      );
      if (user) {
        console.log("signup done", user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold ">Create Your Account</h1>
        <div className="max-w-md w-90 mx-auto p-6 bg-white rounded-lg shadow-md ">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-2xl font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

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
                placeholder="Enter your username"
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
                placeholder="Your password"
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
              Already have a account?{" "}
              <Link to="/">
                <span className="text-blue-500 font-bold underline">Login</span>
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
