// PurchaseForm.tsx
'use client';

import { useState, useEffect } from 'react';

export default function PurchaseForm() {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [supplier, setSupplier] = useState('');
  const [message, setMessage] = useState('');

  // Fetch all products to show in the dropdown
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('quantity', quantity);
    formData.append('purchasePrice', purchasePrice);
    formData.append('supplier', supplier);

    const res = await fetch('/api/purchases', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setMessage('Purchase tracked successfully!');
    } else {
      const errorData = await res.json();
      setMessage(`Error: ${errorData.error}`);
    }
  };

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (

    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {/* <div>
        <label htmlFor="productId">Product:</label>
        <select
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        >
          <option value="">Select a product</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div> */}

      <div>
        <label htmlFor="quantity" className={labelCssStyles}>Quantity Purchased:</label >
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className={inputCssStyles}

        />
      </div>

      <div>
        <label className={labelCssStyles} htmlFor="purchasePrice">Purchase Price:</label>
        <input
          type="number"
          id="purchasePrice"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
          step="0.01"
          required
          className={inputCssStyles}

        />
      </div>

      <div>
        <label className={labelCssStyles} htmlFor="supplier">Supplier Name:</label>
        <input
          type="text"
          id="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          required
          className={inputCssStyles}
        />
      </div>

      <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Track Purchase</button>
      {message && <p>{message}</p>}
    </form>
  );
}
