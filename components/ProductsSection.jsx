import React from 'react'

import { ProductItem } from '.';


const products = [
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 2,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 3,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 4,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 5,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 6,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 7,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 8,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '/product/1',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    }
  ]

const ProductsSection = () => {
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