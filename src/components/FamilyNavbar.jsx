// src/components/family/FamilyNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function FamilyNavbar() {
  return (
    <nav className="w-full bg-gray-900 px-4 py-3 flex justify-between items-center border-b border-orange-400/30">
      <Link to="/" className="text-white text-xl font-bold drop-shadow-glow hover:text-yellow-300 transition">
        DaFTitude
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/login" className="px-4 py-1 rounded bg-transparent border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900 transition text-sm">Login</Link>
        <Link to="/signup" className="px-4 py-1 rounded bg-yellow-300 text-gray-900 hover:bg-yellow-400 transition text-sm">Join Now</Link>
      </div>
    </nav>
  );
}

