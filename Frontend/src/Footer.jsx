import React from 'react';
import {Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
    <hr/>
    <footer className="bg-gradient-to-br from-black to-gray-800 text-white px-6 py-10" id='Contact'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Clothing Store</h2>
          <p className="text-sm text-gray-300">
            Your one-stop fashion destination for trendy apparel, electronics, furniture, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/home" className="hover:text-white">Home</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/login" className="hover:text-white">Login/Register</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Clothes</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Shoes</li>
            <li>Miscellaneous</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Mail size={16} /> support@clothingstore.com</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 9876543210</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Bhilwara, Rajasthan, India</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Clothing Store. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
