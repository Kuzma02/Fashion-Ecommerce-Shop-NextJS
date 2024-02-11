"use client";
import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const SizePicker = ({product}) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">Size</h2>
        <a
          href="#"
          className="text-sm font-medium text-black hover:text-gray-700"
        >
          See sizing chart
        </a>
      </div>

      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {product.sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              className={({ active, checked }) =>
                classNames(
                  size.inStock
                    ? "cursor-pointer focus:outline-none"
                    : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
                  checked
                    ? "border-transparent bg-black text-white hover:bg-black"
                    : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                )
              }
              disabled={!size.inStock}
            >
              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default SizePicker;
