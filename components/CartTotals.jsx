"use client";
import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const CartTotals = () => {
    const { total } = useSelector((state) => state.cart);
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">${ total }</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how shipping is calculated
              </span>
              <AiOutlineQuestionCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">{ total === 0 ? '$0 ': '$10'}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
            <a
              href="#"
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">
                Learn more about how tax is calculated
              </span>
              <AiOutlineQuestionCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </dt>
          <dd className="text-sm font-medium text-gray-900">${ total / 5 }</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base font-medium text-gray-900">${ total === 0 ? "0" : total + 10 + (total / 5) }</dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full rounded-md border border-1 border-black bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-black focus:outline-none"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotals;
