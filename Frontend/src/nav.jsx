import React, { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "./contest/AuthContest.jsx";

const Navbar = () => {
  const { isLogin } = UseAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const quantity = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-black via-gray-900 to-black p-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between sticky top-0 z-50 shadow-lg">
        {/* Top Row */}
        <div className="flex w-full items-center justify-between">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden text-white hover:text-gray-300 transition"
               onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="./aboutUs">
              <span className="text-2xl font-extrabold tracking-tight text-white hover:text-blue-400 transition">
                Fabrico
              </span>
            </Link>
          </div>

          {/* Center desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className="text-gray-200 hover:text-white font-medium transition duration-150 relative after:block after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              to="/faq"
              className="text-gray-200 hover:text-white font-medium transition duration-150 relative after:block after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-white font-medium transition duration-150 relative after:block after:absolute after:w-0 after:h-0.5 after:bg-blue-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            {!isLogin && (
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-full px-4 py-1 transition">
                <Link to="/login" onClick={() => navigate("/login")}>
                  Get Started
                </Link>
              </button>
            )}
            <Link to="/cart">
              <div className="relative">
                <button className="text-gray-100 hover:text-blue-400 transition border border-transparent hover:border-blue-400 rounded-full p-2">
                  <ShoppingCart className="h-5 w-5" />
                </button>
                {quantity > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-full">
                    {quantity}
                  </span>
                )}
              </div>
            </Link>
            <Link to="/profile">
              <button className="text-gray-100 hover:text-blue-400 transition border border-transparent hover:border-blue-400 rounded-full p-2">
                <User className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-black via-gray-900 to-black text-white shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition py-1 border-b border-gray-700 hover:border-blue-400"
          >
            Home
          </Link>
          <Link
            to="/faq"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition py-1 border-b border-gray-700 hover:border-blue-400"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition py-1 border-b border-gray-700 hover:border-blue-400"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
