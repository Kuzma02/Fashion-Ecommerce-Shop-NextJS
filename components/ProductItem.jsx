import React from "react";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import Link from "next/link";
import { ItemAddToCartBtn } from ".";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductItem = ({ product }) => {
  const ratingArray = [100, 100, 100, 100, 100];

  for (let i = 1; i <= product?.attributes?.rating; i++) {
    ratingArray[i - 1] = i;
  }

  return (
    <div>
      <Image
        src={`http://localhost:1337${product?.attributes?.images?.data[0]?.attributes?.url}`}
        width={300}
        height={300}
        alt={product?.attributes?.title}
      />
      <div className="flex flex-col items-center gap-y-[1px] mt-1">
        <Link href={`/product/${product?.id}`}>
          <h2 className="text-xl">{product?.attributes?.title}</h2>
        </Link>
        <p className="text-lg">${product?.attributes?.price}</p>

        <div className="text-black flex text-lg">
          {ratingArray.map((rating, idx) => (
            <MdOutlineStarPurple500
              key={idx}
              className={classNames(
                product?.attributes?.rating >= rating
                  ? "text-yellow-400"
                  : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
            />
          ))}
        </div>
        <div className="flex gap-x-1 mt-2">
          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>XS</p>
          </div>

          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>S</p>
          </div>

          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>L</p>
          </div>

          <div className="w-6 h-6 bg-black text-white flex justify-center items-center text-sm">
            <p>XL</p>
          </div>
        </div>
        <ItemAddToCartBtn id={product?.id} title={product?.attributes?.title} price={product?.attributes?.price} image={`http://localhost:1337${product?.attributes?.images?.data[0]?.attributes?.url}`} />
      </div>
    </div>
  );
};

export default ProductItem;
