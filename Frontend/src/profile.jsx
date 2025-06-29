import React from 'react';
import { UseAuth } from './contest/AuthContest';

const Profile = () => {
  const { logout, user, isLogin } = UseAuth();
  const d = localStorage.getItem("date");
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-10">
      {isLogin ? (
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-xl border border-gray-300">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img
              src="https://via.placeholder.com/120"
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover shadow-md"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">
                <span className="text-gray-500">Welcome</span> {user.username}
              </h2>
              <p className="text-sm text-gray-500 mt-1">Your personal dashboard</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white px-5 py-2 rounded-lg shadow-sm">
                  Edit Profile
                </button>
                <button
                  onClick={logout}
                  className="bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-700 px-5 py-2 rounded-lg shadow-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 border-b pb-2 border-blue-100">
              Account Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Email:</p>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Phone:</p>
                <p className="text-gray-600">+91 9876XXXXXX</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Shipping Address:</p>
                <p className="text-gray-600">123, Bhilwara, Rajasthan</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-700">Joined on:</p>
                <p className="text-gray-600">{d}</p>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6 border-b pb-2 border-blue-100">
              Recent Orders
            </h3>
            <div className="overflow-x-auto border rounded-lg shadow-sm">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-blue-100 text-blue-800 uppercase text-xs">
                  <tr>
                    <th className="py-3 px-5">Order ID</th>
                    <th className="py-3 px-5">Date</th>
                    <th className="py-3 px-5">Total</th>
                    <th className="py-3 px-5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-5 font-medium">#12345</td>
                    <td className="py-3 px-5">May 20, 2025</td>
                    <td className="py-3 px-5">₹2,499</td>
                    <td className="py-3 px-5 text-green-600 font-semibold">Delivered</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-5 font-medium">#12312</td>
                    <td className="py-3 px-5">May 10, 2025</td>
                    <td className="py-3 px-5">₹999</td>
                    <td className="py-3 px-5 text-yellow-600 font-semibold">Shipped</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-4xl text-gray-800 mt-20">Login / Register first 😪</p>
      )}
    </div>

  );
};

export default Profile;
