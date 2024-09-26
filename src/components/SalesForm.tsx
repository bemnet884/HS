// SalesForm.tsx
'use client';

import { useState } from 'react';

export default function SalesForm() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('quantity', quantity);
    formData.append('salePrice', salePrice);

    const res = await fetch('/api/sales', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setMessage('Sale tracked successfully!');
    } else {
      const errorData = await res.json();
      setMessage(`Error: ${errorData.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="productId" className="block text-sm font-medium text-gray-700">Product ID:</label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity Sold:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">Sale Price:</label>
        <input
          type="number"
          id="salePrice"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          step="0.01"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Track Sale
      </button>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </form>
  );
}
