"use client";
import React from "react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SingleProductImages = ({ product }) => {
  return (
    <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
      <h2 className="sr-only">Images</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
        <Image
          src={`http://localhost:1337${product?.data?.attributes?.images?.data[0]?.attributes?.url}`}
          alt="random"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SingleProductImages;
