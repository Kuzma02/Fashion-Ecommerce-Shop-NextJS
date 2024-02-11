import React from 'react'
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";


const products = [
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: '/static/product2.webp',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
  ]

const ProductsSection = () => {
  return (
    <div className="bg-white">
    <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl">Customers also bought</h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <Image
                  src={product.imageSrc}
                  fill
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />

              </div>
              <div className="relative mt-4">
                <h3 className="text-2xl text-center">{product.name}</h3>

                <div>
              <h4 className="sr-only">Available colors</h4>
                  <ul role="list" className="mt-auto flex items-center justify-center space-x-3">
                    {product.availableColors.map((color) => (
                      <li
                        key={color.name}
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                      >
                        <span className="sr-only">{color.name}</span>
                      </li>
                    ))}
                  </ul>
              </div>


              <div className='flex text-3xl justify-center'>
                <MdOutlineStarPurple500 className='text-yellow-400' />
                <MdOutlineStarPurple500 className='text-yellow-400' />
                <MdOutlineStarPurple500 className='text-yellow-400' />
                <MdOutlineStarPurple500 className='text-yellow-400' />
                <MdOutlineStarPurple500 className='text-yellow-400' />
                </div>
                
              </div>
              
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                <p className="relative text-lg font-semibold text-white">{product.price}</p>
              </div>
            </div>
            
            <div className="mt-6">
              
              <a
                href={product.href}
                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Add to bag<span className="sr-only">, {product.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProductsSection