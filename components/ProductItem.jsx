import React from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import Link from "next/link";

const ProductItem = ({ product }) => {

  return (
    <div>
      <Image
        src={product?.acf?.images?.url}
        width={300}
        height={300}
        alt={product?.title?.rendered}
      />
      <div className="flex flex-col items-center gap-y-[1px] mt-1">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-xl">{product?.title?.rendered}</h2>
        </Link>
        <p className="text-lg">${product?.acf?.price}</p>
        <div className="text-black flex text-lg">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarOutline />
        </div>
        <div className="flex gap-x-1 mt-2">
          {product?.acf?.sizes.map((size) => (
            <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
              <p>{size}</p>
            </div>
          ))}
        </div>
        <button className="w-full bg-black py-2 text-sm text-white mt-2 border hover:bg-white hover:text-black border-black">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
