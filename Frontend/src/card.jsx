import { ActivitySquare, Link } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQty, decreaseQty } from './redux/cart/cartSlice';

const Card = ({ productObj, isFeatured }) => {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state) =>
      state.cart.find((item) => item.id === productObj.id)?.quantity || 0
  );
  const incart = useSelector((state) =>
    state.cart.find((item) => item.id === productObj.id)
  );

  let { title, images, price, category } = productObj;

  return (
    <>
      <div className="relative w-[220px] h-[380px] bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 p-3 m-2 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-101 cursor-pointer">
        {isFeatured && (
          <div className="absolute top-2 left-1 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded shadow">
            ★ Featured
          </div>
        )}
        <img
          src={images}
          alt={title}
          className="w-full h-[130px] object-cover rounded-xl transition duration-300"
        />

        <div className="flex flex-col justify-between mt-3 flex-grow">
          <h2 className="text-[15px] font-semibold text-gray-800 text-center mb-1">{title}...</h2>
          <p className="text-yellow-400 text-sm font-bold text-center">
            ★★★<span className="text-gray-500 font-medium"> (4.5)</span>
          </p>
          <p className="absolute top-5 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-700 shadow">
            {category.name}
          </p>
          <div className="flex justify-between items-center mt-1 mb-1">
            <span className="text-base">Price:</span>
            <span className="font-bold text-lg">${price} <span className='line-through italic font-thin'>(${price*2})</span></span>
          </div>
        </div>
        <div className="mt-1 text-center space-y-1">
          {!incart ? (
            <button
              onClick={() => {
                dispatch(addToCart(productObj));
              }}
              className="w-full text-white bg-black border hover:border-black hover:text-black hover:bg-gray-100 cursor-pointer text-sm font-semibold py-1.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  dispatch(decreaseQty(productObj));
                }}
                className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm cursor-pointer"
              >
                -
              </button>
              <span className="text-sm">{quantity}</span>
              <button
                onClick={() => dispatch(increaseQty(productObj))}
                className="rounded-xl bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm cursor-pointer"
              >
                +
              </button>
            </div>
          )}
          <a
            href="./details"
            onClick={() =>
              localStorage.setItem("item", JSON.stringify(productObj))
            }
          >
            <button
              className="w-full mt-1 bg-transparent hover:text-gray-500 hover:border-gray-500 text-black border text-sm font-bold py-1.5 rounded-xl transition-all duration-300 ease-in-out cursor-pointer"
            >
              More Details
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
