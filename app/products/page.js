"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");

  const products = [
    { id: 1, name: "TMT Bars", category: "steel" },
    { id: 2, name: "Cement Bag", category: "cement" },
    { id: 3, name: "Wall Paint", category: "paints" },
    { id: 4, name: "Bricks", category: "construction" },
  ];

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div>
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>

        {/* Filters */}
        <div className="flex space-x-4 mb-8">
          {["all", "steel", "cement", "paints", "construction"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg border ${
                filter === cat ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 shadow hover:shadow-lg">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
