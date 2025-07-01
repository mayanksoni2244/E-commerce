import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQty, increaseQty } from './redux/cart/cartSlice'

const Details = () => {
    const [product, setProduct] = useState('')
    const dispatch = useDispatch()
    const quantity = useSelector((state) => state.cart.find((item) => item.id === product.id)?.quantity || 0)
    const incart = useSelector((state) => state.cart.find((item) => item.id === product.id))

    useEffect(() => {
        const data = localStorage.getItem('item')
        if (data) {
            setProduct(JSON.parse(data))
        }
    }, [])

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                
                {/* Image */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                    <img
                        src={product.images}
                        alt={product.title}
                        className="w-full h-[410px]  object-contain  bg-white p-4 transition-transform duration-500 hover:scale-101 "
                    />
                </div>

                {/* Info */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-extrabold text-gray-800">{product.title}</h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {product.description || "Discover the perfect blend of style and comfort with this premium product, crafted to elevate your everyday experience."}
                    </p>
                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 text-xl">★ ★ ★ ★ ☆</span>
                        <span className="text-gray-500">(112 reviews)</span>
                    </div>
                    <h3 className="text-3xl font-bold text-indigo-600">Only ${product.price}</h3>

                    {/* Add to Cart / Quantity */}
                    {!incart ? (
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="w-full py-3 cursor-pointer mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-full shadow-md transition duration-300"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex items-center gap-4 mt-4">
                            <button
                                onClick={() => dispatch(decreaseQty(product))}
                                className="bg-red-500 hover:bg-red-600 text-white text-lg px-4 py-2 rounded-full transition duration-300"
                            >
                                −
                            </button>
                            <span className="text-xl font-medium text-gray-800">{quantity}</span>
                            <button
                                onClick={() => dispatch(increaseQty(product))}
                                className="bg-green-500 hover:bg-green-600 text-white text-lg px-4 py-2 rounded-full transition duration-300"
                            >
                                +
                            </button>
                        </div>
                    )}

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Why You’ll Love It</h2>
                        <ul className="space-y-2 list-disc pl-6 text-gray-600">
                            <li>Premium quality materials for long-lasting use</li>
                            <li>Elegant design fits any lifestyle</li>
                            <li>Fast and free shipping</li>
                            <li>30-day money-back guarantee</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="max-w-7xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-2xl p-4">
                        <p className="text-gray-700 mb-2">"Absolutely love this product! The quality exceeded my expectations."</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★★★★★</span>
                            <span className="text-gray-500 text-sm">by Sarah J.</span>
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-2xl p-4">
                        <p className="text-gray-700 mb-2">"Great value for money and the shipping was super fast."</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★★★★☆</span>
                            <span className="text-gray-500 text-sm">by Michael K.</span>
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-2xl p-4">
                        <p className="text-gray-700 mb-2">"Highly recommend to anyone looking for quality and style."</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★★★★★</span>
                            <span className="text-gray-500 text-sm">by Priya S.</span>
                        </div>
                    </div>
                    <div className="border border-gray-200 rounded-2xl p-4">
                        <p className="text-gray-700 mb-2">"Looks exactly as described. Very happy with my purchase."</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★★★★☆</span>
                            <span className="text-gray-500 text-sm">by David L.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
