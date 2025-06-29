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
      <nav className="w-full bg-black shadow-md p-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between sticky top-0 z-50">
        {/* Top Row */}
        <div className="flex w-full items-center justify-between">
          {/* Left */}
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <span className="text-xl font-bold text-white border rounded p-1 border-transparent hover:border-white">
              Clothing Store
            </span>
          </div>

          {/* Center desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/home" className="text-white border rounded p-1 border-transparent hover:border-white">
              Home
            </Link>
            <Link to="/faq" className="text-white border rounded p-1 border-transparent hover:border-white">
              FAQ
            </Link>
            <Link to="/contact" className="text-white border rounded p-1 border-transparent hover:border-white">
              Contact
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-3">
            {!isLogin && (
            <button className="bg-blue-400 rounded p-1 border-transparent border hover:border-white">
              <Link to="/login" onClick={() => navigate("/login")} className="p-1">
                Login/Register
              </Link>
            </button>
              
            )}
            <Link to="/cart">
              <div className="relative">
                <button className="text-gray-100 relative cursor-pointer border rounded p-1 border-transparent hover:border-white">
                  <ShoppingCart className="h-5 w-5" />
                </button>
                {quantity > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {quantity}
                  </span>
                )}
              </div>
            </Link>
            <Link to="/profile">
              <button className="text-gray-100 cursor-pointer border rounded p-1 border-transparent hover:border-white">
                <User className="h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          <Link to="/home" className="hover:text-blue-600">Home</Link>
          <Link to="/faq" className="hover:text-blue-600">FAQ</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
