"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // dropdown arrow

export default function SecondaryNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 text-sm">
        
        {/* Left side - categories */}
        <ul className="flex items-center gap-6">
          {["Mild Steel", "Stainless Steel", "Structural Steel", "TMT", "Cement", "Bitumen", "Blogs"].map((item) => (
            <li key={item} className="relative group">
              <button
                onClick={() => toggleMenu(item)}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                {item}
                {(item === "Mild Steel" || item === "Stainless Steel" || item === "Structural Steel" || item === "Bitumen") && (
                  <ChevronDown size={14} />
                )}
              </button>

              {/* Example dropdown */}
              {openMenu === item && (
                <div className="absolute top-6 left-0 bg-white shadow-md rounded-md p-3 w-40">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600 cursor-pointer">Option 1</li>
                    <li className="hover:text-blue-600 cursor-pointer">Option 2</li>
                    <li className="hover:text-blue-600 cursor-pointer">Option 3</li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side - connect with us */}
        <div className="flex items-center gap-1 text-blue-600 cursor-pointer hover:underline">
          🎧 Connect with us
          <ChevronDown size={14} />
        </div>
      </div>
    </nav>
  );
}
