"use client";

import { useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: "TMT Bars", category: "steel" },
    { id: 2, name: "Cement Bag", category: "cement" },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", category: "" });

  const addProduct = () => {
    if (!newProduct.name || !newProduct.category) return;
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setNewProduct({ name: "", category: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      {/* Add Form */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="font-semibold mb-4">Add Product</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <button
            onClick={addProduct}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="font-semibold mb-4">Products List</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">{p.category}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
