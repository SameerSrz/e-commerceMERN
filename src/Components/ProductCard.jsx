import React from 'react'

const ProductCard = ({product}) => {
  console.log(product)
  return (
    <div className="max-w-xs p-6 rounded-lg ring-1 shadow-lg dark:bg-gray-900 dark:text-gray-50">
	<img src={product.image_Url[0].url} alt="" className="object-cover object-center w-full rounded-lg h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracki uppercase dark:text-violet-400">{product.shop.name}</span>
		<h2 className="text-xl font-semibold tracki">{product.name}</h2>
	</div>
  <div>
    <h4>
      <span className='line-through'>{product.price}</span> <span className='font-bold'>{product.discount_price}</span>
      {/* <button type="button" className="px-8 py-3 font-semibold rounded-full flex justify-end items-end dark:bg-gray-100 dark:text-gray-800">Rounded</button> */}
    </h4>
  </div>
  </div>
  )
}

export default ProductCard