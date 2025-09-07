// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ngwaGreen text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-ngwaGold">
          NGWA DAY
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-ngwaGold">Home</Link>
          <Link href="/generate" className="hover:text-ngwaGold">Generate Flyer</Link>
          <Link href="/download" className="hover:text-ngwaGold">Download</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ngwaGold"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ngwaBlack text-white px-4 py-3 space-y-2">
          <Link href="/" className="block hover:text-ngwaGold">Home</Link>
          <Link href="/generate" className="block hover:text-ngwaGold">Generate Flyer</Link>
          <Link href="/download" className="block hover:text-ngwaGold">Download</Link>
        </div>
      )}
    </nav>
  );
}
