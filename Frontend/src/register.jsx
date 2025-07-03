import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    createdate: new Date().toLocaleDateString(),
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
      const res=await axios.post("https://fabrico-o87m.onrender.com", formData);
      toast.success("Registered Successfully, Now you can login");
      localStorage.setItem("date", formData.createdate);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message || "Registration failed");
      } else {
        toast.error("An error occurred during registration");
      } 
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
            Create Account
          </h2>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="username"
              className="w-full p-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 border border-gray-300 outline-none transition placeholder-gray-500"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

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
            Register
          </button>

          <p className="text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold underline text-blue-600"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
