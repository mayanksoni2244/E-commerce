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
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Image Section */}
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
                    <img
                        src={product.images}
                        alt={product.title}
                        className="w-full h-[400px] object-contain bg-white p-4 transition-transform duration-500 hover:scale-102"
                    />
                </div>

                {/* Info Section */}
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4" data-aos="fade-down" data-aos-duration='1000'>{product.title}</h1>
                    <h2 className="text-2xl font-semibold text-gray-600 mb-3" data-aos="fade-left" data-aos-duration='1500'>Description</h2>
                    <p className="text-gray-700 leading-relaxed mb-6" data-aos="fade-left" data-aos-duration='1500'>{product.description}</p>
                    <h3 className="text-3xl font-bold text-indigo-600 mb-6" data-aos="zoom-in" data-aos-duration='1500'>Only ${product.price}</h3>

                    {/* Add to Cart / Quantity Controls */}
                    {!incart ? (
                        <button
                        data-aos="zoom-in" data-aos-duration='1500'
                            onClick={() => dispatch(addToCart(product))}
                            className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-full shadow-md transition duration-300"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex items-center gap-4">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white text-lg px-4 py-2 rounded-full transition duration-300"
                                onClick={() => dispatch(decreaseQty(product))}
                            >
                                −
                            </button>
                            <span className="text-xl font-medium text-gray-800">{quantity}</span>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white text-lg px-4 py-2 rounded-full transition duration-300"
                                onClick={() => dispatch(increaseQty(product))}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Details
