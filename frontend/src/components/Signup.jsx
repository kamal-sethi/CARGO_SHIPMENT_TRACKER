import React, { useState } from "react";

const Signup = () => {
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullname, password, username);
  };

  return (
    <>
      <div class="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold ">Create Your Account</h1>
        <div class="max-w-md w-90 mx-auto p-6 bg-white rounded-lg shadow-md ">
          <form class="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label for="name" class="block text-gray-700 text-2xl font-bold">
                Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your name"
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label
                for="username"
                class="block text-gray-700 text-2xl font-bold"
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
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-gray-700 text-2xl font-bold"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              ></input>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
