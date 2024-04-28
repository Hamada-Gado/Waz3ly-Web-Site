import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Username: ${username}, Password: ${password}, Email: ${email}, First Name: ${firstName}, Last Name: ${lastName}`
    );
    // Clear form fields after submission
    setUsername("");
    setPassword("");
    setEmail("");
    setName("");
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg px-8 pb-8 max-w-md w-full space-y-8">
        <h1 className="text-3xl font-heading font-bold text-primary text-center">
          Register
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-body text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-body text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-body text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-body text-gray-700">
              Name
            </label>
            <input
              id="first_name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary focus:ring-1"
              required
            />
          </div>

          <Link to="/furtherregister" className="">
            <button
              type="submit"
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-md shadow-sm w-full"
            >
              Next Step
            </button>
          </Link>
        </form>
        <div className="text-sm text-gray-700 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
