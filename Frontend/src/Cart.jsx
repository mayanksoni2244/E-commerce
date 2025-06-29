import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseQty, decreaseQty, removeCart } from './redux/cart/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const totalprice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  function handleCheckout() {
    navigate('/checkout')
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-10'>
      {cart.length === 0 ? (
        <h1 className='text-2xl flex justify-center items-center p-10 text-gray-600'>Your Cart is empty 😥</h1>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg hover:shadow-2xl p-5 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 w-full md:w-2/3">
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-xl border border-gray-200"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                  <p className="text-xs text-gray-600 mt-1">Category: {item.category.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                <button
                  onClick={() => dispatch(decreaseQty(item))}
                  className="w-9 h-9 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-full font-bold text-lg transition-all"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQty(item))}
                  className="w-9 h-9 bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded-full font-bold text-lg transition-all"
                >
                  +
                </button>
              </div>
              <p className="text-xl font-bold text-gray-700 mt-4 md:mt-0">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}


          <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-md rounded-xl p-6 mt-6 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Total: ${totalprice.toFixed(2)}
            </h2>
            <div className='flex gap-2 mt-4 md:mt-0'>
              <button
                onClick={() => dispatch(removeCart())}
                className=" md:mt-0 bg-red-600 hover:bg-red-700 border-red-500 cursor-pointer text-white px-5  rounded shadow transition-all duration-300"
              >
                Clear Cart
              </button>

              <div
                onClick={handleCheckout}
                className="relative group  w-28 h-10 bg-gray-800 text-white rounded-md cursor-pointer overflow-hidden"
              >
                {/* Tooltip */}
                <div
                  className="absolute w-24 h-8 bg-gray-700 text-xs text-center rounded-md flex items-center justify-center transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  style={{
                    bottom: '3.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  Price: ${totalprice.toFixed(2)}
                </div>
                {/* Tooltip Arrow */}
                <div
                  className="absolute w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500"
                  style={{
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
                {/* Text and Icon */}
                <div className="absolute inset-0  flex items-center justify-center transition-all duration-500 group-hover:-translate-y-full">
                  <span className="text-sm font-medium">Buy Now</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Cart
