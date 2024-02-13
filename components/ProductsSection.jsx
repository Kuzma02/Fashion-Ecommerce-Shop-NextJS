import React from 'react'

import { ProductItem } from '.';


const ProductsSection = async () => {
  const req = await fetch("http://localhost/headless-wp/wordpress/wp-json/wp/v2/products?acf_format=standard&_fields=id,title,acf");
  const products = await req.json();

  return (
    <div className='px-5'>
      <h2 className="text-5xl py-10 text-center">Featured Products</h2>

      <div className="flex flex-wrap justify-around gap-x-2 gap-y-5">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  </div>
  )
}

export default ProductsSection