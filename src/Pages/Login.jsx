import React, { useState } from "react";
import { Footer, Navbar } from "../Components";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full fixed top-0">
        <Navbar />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-4 rounded-xl bg-white dark:bg-gray-900 dark:text-gray-100 shadow-md">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-sm">
              <label htmlFor="username" className="block dark:text-gray-400">
                Email
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none"
              />
            </div>
            <div className="space-y-2 text-sm relative">
              <label htmlFor="password" className="block dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-violet-400 focus:outline-none"
              />
              {/* <div className="absolute right-4 top-3">
          <a rel="noopener noreferrer" href="#" className="text-xs text-gray-400 hover:underline">Forgot Password?</a>
        </div> */}
            </div>

            <div className="space-y-2 text-sm relative">
              Don't Have an Account?
              <Link to={"/sign-up"}>
                <span className="text-blue-400"> Click to Sign Up</span>
              </Link>
            </div>
            <button className="w-full py-3 text-center rounded-md bg-violet-400 text-white hover:bg-violet-500 transition duration-300 ease-in-out">
              Sign in
            </button>
          </form>
          {/* ... social login buttons and other content ... */}
        </div>
      </div>

      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
