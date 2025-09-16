"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Company Logo" 
            width={60} 
            height={60} 
            className="rounded-full"
          />
          <span className="font-bold text-xl text-gray-800">
           RefractInfraStructure
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/admin" className="hover:text-blue-600">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
