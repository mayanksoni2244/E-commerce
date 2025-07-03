import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseAuth } from "./contest/AuthContest.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { login } = UseAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://fab-b.onrender.com/api/auth/login", formData, { withCredentials: true });
      toast.success("Logged in Successfully");
      login(response.data.user);

      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Invalid credentials, please try again");
    }
  }

  return (
    <>
      <ToastContainer position='top-right' autoClose={3000} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-200 p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 border border-gray-300 outline-none transition placeholder-gray-500"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 border border-gray-300 outline-none transition placeholder-gray-500"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-400 hover:bg-blue-500 cursor-pointer text-white font-semibold text-base"
          >
            Login
          </button>

          <p className="text-center text-gray-600 mt-2">
            Don't have an account?{" "}
            <Link
              to="/"
              className="font-semibold underline text-blue-600"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
