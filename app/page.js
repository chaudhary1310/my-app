import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  const categories = [
    { name: "Steel Products", slug: "steel" },
    { name: "Cement", slug: "cement" },
    { name: "Paints", slug: "paints" },
    { name: "Construction Materials", slug: "construction" },
  ];

  return (
    <div>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-24">
          <h1 className="text-5xl font-bold">Empowering MSMEs with Quality Materials</h1>
          <p className="mt-4 text-lg">Find the right products at the best prices</p>
          <Link
            href="/products"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Explore Products
          </Link>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="border rounded-lg p-6 text-center shadow hover:shadow-lg"
              >
                <p className="font-semibold">{cat.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
}
