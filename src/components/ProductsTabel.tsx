'use client'
// src/components/ProductsTable.tsx
import { useEffect, useState } from 'react';

// Define the Product type based on your Prisma model
interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export default function ProductsTable() {
  // Explicitly define the type of products as Product[]
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data: Product[] = await response.json(); // Explicitly type the response
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Slug</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Created At</th>
            <th className="py-2 px-4 border-b">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.id}</td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.slug}</td>
                <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{product.quantity}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(product.updatedAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-2 px-4">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
