import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from './redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {UseAuth} from './contest/AuthContest';
import { nanoid } from 'nanoid';

function Checkout() {
    const [pay, setpay] = useState(false);
    const { user } = UseAuth();
    const [ship, setship] = useState({
        name: '',
        address: '',
        city: '',
        zip: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkout = useSelector((state) => state.cart);
    const totalprice = checkout.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    function continueshop() {
        dispatch(removeCart());
        setpay(false);
        navigate('/home');
    }
    const handlePaymentSuccess = async (orderId, userEmail) => {
        try {
            const res = await axios.post("http://localhost:3000/api/payment-success", {
                userEmail,
                orderId,
            });
            console.log(res.data.message);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <ToastContainer position='top-right' autoClose={3000} />
            {pay ? (
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                    <div className="bg-white rounded-3xl shadow-lg p-10 max-w-lg text-center">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                        <h1 className="text-3xl font-bold text-gray-800 mt-4">
                            Thank You for Your Purchase!
                        </h1>
                        <p className="text-gray-600 mt-2">
                            We appreciate your order. Your payment was successful.
                        </p>
                        <div className="mt-8 flex flex-col md:flex-row gap-4">
                            <button
                                onClick={continueshop}
                                className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow transition duration-300"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12">
                    {checkout.length === 0 ? (
                        <h1 className="text-3xl font-semibold text-gray-600 flex justify-center items-center p-10">
                            Your Cart is empty 😥
                        </h1>
                    ) : (

                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                            {/* Left: Cart Items */}
                            <div className="lg:col-span-2 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Order</h2>
                                {checkout.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 group"
                                    >
                                        <div className="flex items-center gap-4 w-full md:w-2/3">
                                            <div className="relative w-24 h-24 flex-shrink-0">
                                                <img
                                                    src={item.images}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover rounded-xl border border-gray-300 group-hover:scale-105 transition duration-300"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-medium text-gray-800 group-hover:text-blue-600 transition">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Category: {item.category.name}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0 text-right">
                                            <p className="text-xl font-semibold text-gray-800">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Shipping Address */}

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Address</h2>
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            required
                                            value={ship.name}
                                            onChange={(e) => setship({ ...ship, name: e.target.value })}
                                            className="w-full border border-gray-300 rounded-lg p-2"
                                        />
                                        <input
                                            type="text"
                                            required
                                            value={ship.address}
                                            onChange={(e) => setship({ ...ship, address: e.target.value })}
                                            placeholder="Street Address"
                                            className="w-full border border-gray-300 rounded-lg p-2"
                                        />
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="City"
                                                required
                                                value={ship.city}
                                                onChange={(e) => setship({ ...ship, city: e.target.value })}
                                                className="w-1/2 border border-gray-300 rounded-lg p-2"
                                            />
                                            <input
                                                type="text"
                                                placeholder="ZIP Code"
                                                required
                                                value={ship.zip}
                                                onChange={(e) => setship({ ...ship, zip: e.target.value })}
                                                className="w-1/2 border border-gray-300 rounded-lg p-2"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h2>
                                    <div className="space-y-3">
                                        <label className="flex border border-yellow-200 bg-yellow-100 rounded-xl p-3 items-center gap-2">
                                            <input type="radio" name="payment" defaultChecked />
                                            <span>Credit/Debit Card</span>
                                        </label>
                                        <label className="flex items-center gap-2 border border-yellow-200 bg-yellow-100 rounded-xl p-3">
                                            <input type="radio" name="payment" />
                                            <span>UPI</span>
                                        </label>
                                        <label className="flex items-center gap-2 border border-yellow-200 bg-yellow-100 rounded-xl p-3">
                                            <input type="radio" name="payment" />
                                            <span>Cash on Delivery</span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            {/* Right: Order Summary */}
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="text-gray-800 font-medium">${totalprice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="text-gray-800 font-medium">FREE</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                        <span className="text-lg font-semibold text-gray-800">Total</span>
                                        <span className="text-lg font-bold text-gray-900">${totalprice.toFixed(2)}</span>
                                    </div>
                                    <div className="mt-6 flex flex-col gap-4">
                                        <button
                                            onClick={async () => {
                                                if (!ship.name || !ship.address || !ship.city || !ship.zip) {
                                                    toast.error("Please fill all shipping details.");
                                                    return;
                                                }

                                                // 👇 Backend API call karo
                                                await handlePaymentSuccess(
                                                    `${nanoid(10)}` , // Random Order ID
                                                    user.email // Yahan apna user email dalna
                                                );

                                                toast.success("Order placed!");
                                                setpay(true);
                                                dispatch(removeCart());
                                            }}

                                            className="w-full bg-black text-white font-semibold py-3 rounded-xl shadow hover:bg-gray-900 transition duration-300"
                                        >
                                            Pay Now 💸
                                        </button>
                                        <button
                                            onClick={() => navigate('/home')}
                                            type="button"
                                            className="w-full border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-100 transition duration-300"
                                        >
                                            Continue Shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Checkout;
