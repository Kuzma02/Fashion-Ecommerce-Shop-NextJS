import React from 'react'
import { ProductItem } from '.'


const Products = async ({filterParams}) => {
  const req = await fetch(`http://localhost:1337/api/products?populate=*&filters[price][$lte]=${filterParams?.price || 1000}`);
  const products = await req.json();

  return (
    <div className="flex flex-wrap justify-around gap-x-2 gap-y-5 px-5">
        {products?.data.map((product) => (
          <ProductItem key={product?.data?.id} product={product} />
        ))}
    </div>
  )
}

export default Products