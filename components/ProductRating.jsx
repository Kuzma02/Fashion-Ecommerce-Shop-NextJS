"use client";
import React from 'react'
import { IoStar } from "react-icons/io5";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const ProductRating = ({product}) => {

  const ratingArray = [100, 100, 100, 100, 100];

  for(let i = 1; i <= product?.data?.attributes?.rating; i++){
    ratingArray[i-1] = i;
  }

  return (
    <div className="mt-4">
    <h2 className="sr-only">Reviews</h2>
    <div className="flex items-center">
      <p className="text-sm text-black">
        {product?.acf?.rating}
        <span className="sr-only"> out of 5 stars</span>
      </p>
      <div className="ml-1 flex items-center">
        {ratingArray.map((rating) => (
          <IoStar
            key={rating}
            className={classNames(
              product?.data?.attributes?.rating >= rating
                ? "text-yellow-400"
                : "text-gray-200",
              "h-5 w-5 flex-shrink-0"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="ml-4 text-sm text-black"
      >
        ·
      </div>
      <div className="ml-4 flex">
        <a
          href="#"
          className="text-sm font-medium text-black hover:text-gray-700"
        >
          See all 200 reviews
        </a>
      </div>
    </div>
  </div>
  )
}

export default ProductRating