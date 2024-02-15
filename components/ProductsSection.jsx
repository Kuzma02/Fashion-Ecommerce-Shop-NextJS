import React from 'react'

import { ProductItem } from '.';


const ProductsSection = async () => {
  const req = await fetch("http://localhost:1337/api/products?populate=*");
  const products = await req.json();

  return (
    <div className='px-5'>
      <h2 className="text-5xl py-10 text-center">Featured Products</h2>

      <div className="flex flex-wrap justify-around gap-x-2 gap-y-5">
        {products?.data.map((product) => (
          <ProductItem key={product?.id} product={product} />
        ))}
    </div>
  </div>
  )
}

export default ProductsSection