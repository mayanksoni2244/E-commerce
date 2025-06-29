import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from './redux/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

function Checkout() {
    const [pay, setpay] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const checkout = useSelector((state) => state.cart)
    const totalprice = checkout.reduce((acc, item) => acc + item.price * item.quantity, 0)

    function continueshop() {
        dispatch(removeCart())
        setpay(false)
        navigate('/home')
    }
    return (
        <>

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
                                className="flex-1 bg-gradient-to-r cursor-pointer from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow transition duration-300"
                            >
                                Continue Shopping
                            </button>

                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-12">

                    {
                        checkout.length === 0 ? (
                            <h1 className="text-3xl font-semibold text-gray-600 flex justify-center items-center p-10">
                                Your Cart is empty 😥
                            </h1>
                        ) : (
                            <div className="max-w-5xl mx-auto space-y-8 px-4">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h2>
                                <div className="space-y-6">
                                    {checkout.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 group"
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
                                </div>

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
                                    <div className="mt-6 flex flex-col md:flex-row gap-4">
                                        <button
                                            onClick={() => setpay(true)}
                                            className="flex-1  cursor-pointer bg-black  text-white font-semibold py-3 rounded-xl shadow transition duration-300"
                                        >
                                            Pay Now 💸
                                        </button>
                                        <button
                                            onClick={() => navigate('/home')}
                                            type="button"
                                            className="bg-white text-center  w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group mx-auto md:mx-0"
                                        >
                                            <div
                                                className="bg-green-400  rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 1024 1024"
                                                    height="25px"
                                                    width="25px"
                                                >
                                                    <path
                                                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                                        fill="#000000"
                                                    ></path>
                                                    <path
                                                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                                        fill="#000000"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="translate-x-2">Go Home</p>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </>
    )
}

export default Checkout
