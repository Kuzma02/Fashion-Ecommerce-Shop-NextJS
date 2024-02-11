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

import { Breadcrumb, Filters, Products } from "@/components";
import React from "react";


const Shop = () => {
  
  return (
    <div className="max-w-screen-2xl mx-auto">
    <Breadcrumb />
    <h1 className="text-5xl py-10 text-center">Shop Page</h1>
    <div className="grid grid-cols-[300px_1fr] max-lg:grid-cols-1">
        <div><Filters /></div>
        <div><Products /></div>
    </div>
    </div>
  );
};

export default Shop;
