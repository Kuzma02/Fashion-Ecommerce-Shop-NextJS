import React from 'react'
import { ProductItem } from '.'


const Products = async ({filterParams}) => {
  const req = await fetch(`http://localhost:1337/api/products?populate=*&filters[price][$lte]=${filterParams?.price || 1000}${filterParams?.women !== "" ? "&filters[category][$eq]=women" : ""}${filterParams?.womenNewEdition !== "" ? "&filters[category][$eq]=women%20new%20edition" : ""}`);
  const products = await req.json();

  console.log(`http://localhost:1337/api/products?populate=*&filters[price][$lte]=${filterParams?.price || 1000}${filterParams?.women === "true" ? "&filters[category][$eq]=women" : ""}`);

  return (
    <div className="flex flex-wrap justify-around gap-x-2 gap-y-5 px-5">
        {products?.data.map((product) => (
          <ProductItem key={product?.data?.id} product={product} />
        ))}
    </div>
  )
}

export default Products