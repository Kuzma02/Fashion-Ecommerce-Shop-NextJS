/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export const dynamic = 'force-dynamic';
export const revalidate = 0

import { Breadcrumb, Filters, ProductItem, Products } from "@/components";
import React from "react";

const Shop = async ({ searchParams }) => {
  const req = await fetch(
    `http://localhost:1337/api/products?populate=*&filters[price][$lte]=${
      searchParams?.price || 1000
    }${searchParams.women === "true" ? "&filters[category][$eq]=women" : ""}${searchParams.womenNewEdition === "true" ? "&filters[category][$eq]=women%20new%20edition" : ""}&filters[rating][$gte]=${
      searchParams?.rating || 1
    }`
  );
  const products = await req.json();

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Breadcrumb />
      <h1 className="text-5xl py-10 text-center">Shop Page</h1>
      <div className="grid grid-cols-[300px_1fr] max-lg:grid-cols-1">
        <div>
          <Filters />
        </div>
        <div>
          <div className="flex flex-wrap justify-around gap-x-2 gap-y-5 px-5">
            {products?.data.map((product) => (
              <ProductItem key={product?.data?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
