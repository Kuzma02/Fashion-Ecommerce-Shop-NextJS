import React from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

const ProductItem = ({ product }) => {
  return (
    <div>
      <Image
        src="/static/product1.webp"
        width={300}
        height={300}
        alt={product.name}
      />
      <div className="flex flex-col items-center gap-y-[1px] mt-1">
        <h2 className="text-xl">{product.name}</h2>
        <p className="text-lg">{product.price}</p>
        <div className="text-black flex text-lg">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarOutline />
        </div>
        <div className="flex gap-x-1 mt-2">
          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>SM</p>
          </div>
          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>M</p>
          </div>
          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>L</p>
          </div>
          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>XL</p>
          </div>
          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>2XL</p>
          </div>
        </div>
        <button className="w-full bg-black py-2 text-sm text-white mt-2 border hover:bg-white hover:text-black border-black">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
