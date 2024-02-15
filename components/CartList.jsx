"use client";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import React from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { removeItem, updateQuantity } from "@/app/_redux/features/cart-slice";
import { useDispatch } from "react-redux";

const CartList = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
  return (
    <ul
    role="list"
    className="divide-y divide-gray-200 border-b border-t border-gray-200"
  >
    {cartItems.length === 0 ? <h2 className="text-4xl font-bold text-center my-10">Your cart is empty</h2> : cartItems.map((item) => (
      <li key={item?.product?.id} className="flex py-6 sm:py-10">
        <div className="flex-shrink-0">
          <img
            src={item?.product?.image}
            alt={item?.product?.title}
            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div>
              <div className="flex justify-between">
                <h3 className="text-sm">
                  <a
                    href={`http://localhost:3000/product/${item?.product?.id}`}
                    className="font-medium text-gray-700 hover:text-gray-800"
                  >
                    {item?.product?.title}
                  </a>
                </h3>
              </div>
              <div className="mt-1 flex text-sm">
                <p className="text-gray-500">green</p>

                  <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                    XS
                  </p>

              </div>
              <p className="mt-1 text-sm font-medium text-gray-900">
                ${item?.product?.price}
              </p>
            </div>

            <div className="mt-4 sm:mt-0 sm:pr-9">
              <label
                htmlFor={`quantity-${item?.product?.id}`}
                className="sr-only"
              >
                Quantity, {item?.product?.title}
              </label>
              <input type="text" className="w-16 h-10 bg-white border border-1 border-black" value={item.product.amount} onChange={(e) => dispatch(updateQuantity({product: {id: item.product.id, quantity: e.target.value}}))} />

              <div className="absolute right-0 top-0">
                <button
                  type="button"
                  className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Remove</span>
                  <HiOutlineXMark
                     onClick={() => dispatch(removeItem({id: item?.product?.id}))}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 flex space-x-2 text-sm text-gray-700">
            {true ? (
              <FaCheck
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <AiOutlineClockCircle
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                aria-hidden="true"
              />
            )}

            <span>
              {true
                ? "In stock"
                : `Ships in 3 days`}
            </span>
          </p>
        </div>
      </li>
    ))}
  </ul>
  )
}

export default CartList