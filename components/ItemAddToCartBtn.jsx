"use client";
import { addToCart } from "@/app/_redux/features/cart-slice";
import React from "react";
import { useDispatch } from "react-redux";

const ItemAddToCartBtn = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  const onBtnClick = (id) => {
    dispatch(addToCart({ product: { id, title, price, image, amount: 1 } }));
  };

  return (
    <button
      onClick={() => onBtnClick(id)}
      className="w-full bg-black py-2 text-sm text-white mt-2 border hover:bg-white hover:text-black border-black"
    >
      Add to cart
    </button>
  );
};

export default ItemAddToCartBtn;
