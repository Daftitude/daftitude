// src/components/family/FamilyNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function FamilyNavbar() {
  return (
    <nav className="w-full bg-[#111827]/95 backdrop-blur border-b border-yellow-300/30 px-4 py-2 flex justify-between items-center text-sm z-40 relative">
      {/* Left: Logo */}
      <Link
        to="/family"
        className="text-yellow-300 font-semibold text-lg tracking-wide hover:text-yellow-400 transition"
      >
        DaFT<span className="text-white">Fam</span>
      </Link>

      {/* Right: Auth buttons */}
      <div className="flex gap-3 items-center">
        <Link
          to="/family/login"
          className="px-3 py-[6px] border border-yellow-300 text-yellow-300 rounded-md hover:bg-yellow-300 hover:text-gray-900 transition duration-200"
        >
          Login
        </Link>
        <Link
          to="/family/signup"
          className="px-3 py-[6px] bg-yellow-300 text-gray-900 font-medium rounded-md hover:bg-yellow-400 transition duration-200"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
}