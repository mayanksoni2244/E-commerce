import { ActivitySquare, Link } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseQty, decreaseQty } from './redux/cart/cartSlice';


const Card = ({ productObj, isFeatured }) => {
    const dispatch = useDispatch()
    const quantity = useSelector((state) => state.cart.find((item) => item.id === productObj.id)?.quantity || 0);
    const incart = useSelector((state) => state.cart.find((item) => item.id === productObj.id));


    let { title, images, price, category } = productObj

    return (
        <>
            <div className="relative w-[270px] h-[470px] bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 p-4 m-3 flex flex-col justify-between transition-transform duration-300 ease-in-out  hover:scale-102 cursor-pointer">
                {isFeatured && (
                    <div className="absolute top-2 left-1 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
                        ★ Featured
                    </div>
                )}
                <img
                    src={images}
                    alt={title}
                    className="w-full h-[180px] object-cover rounded-xl transition duration-300"
                />

                <div className="flex flex-col justify-between mt-4 flex-grow">
                    <h2 className="text-lg font-semibold text-gray-800 text-center mb-1">{title}...</h2>
                    <p className='text-yellow-400 font-bold text-center'>★★★<span className='text-gray-500 font-medium'> (4.5)</span></p>
                    <p className='absolute top-6 right-5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg '>{category.name}</p>
                    <div className="flex justify-between mb-2">
                        <span className='text-2xl '>Price :</span>
                        <span className=" font-bold text-2xl ">
                            ${price}
                        </span>
                    </div>
                </div>
                <div className="mt-1 text-center">
                    {!incart ? (
                        <button
                            onClick={() => {
                                dispatch(addToCart(productObj))
                            }}
                            className="w-full text-white bg-black border hover:border-black hover:text-black hover:bg-gray-100 cursor-pointer font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                        >
                            Add to Cart
                        </button>

                    ) : (
                        <div className='flex justify-between'>
                            <button onClick={() => {
                                dispatch(decreaseQty(productObj))

                            }} className='rounded-xl bg-red-600 hover:bg-red-700 text-white px-4 cursor-pointer'> - </button>
                            <span>{quantity}</span>
                            <button onClick={() => dispatch(increaseQty(productObj))} className='rounded-xl bg-green-600 hover:bg-green-700 text-white px-4 py-2 cursor-pointer'>+</button>
                        </div>
                    )}
                    <a href="./details" onClick={() => localStorage.setItem('item', JSON.stringify(productObj))}>
                        <button
                            className="w-full mt-1 bg-transparent hover:text-gray-500 hover:border-gray-500 text-black border font-bold py-2 rounded-xl transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-indigo-700 cursor-pointer"
                        >
                            More Details
                        </button>
                    </a>
                </div>
            </div>

        </>
    )
}
export default Card
