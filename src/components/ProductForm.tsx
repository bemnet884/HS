import { createProduct, createUser } from '@/actions/actions';
import React from 'react'

const ProductForm = () => {
  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";
  return (
    <div>
      <form action={createProduct} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <label htmlFor="productName" className={labelCssStyles}>
          Product Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className={inputCssStyles}
          required
        />

        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          step="0.01"
          placeholder='Price'
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />

        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder='Quantity'
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default ProductForm


