"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-ngwaGreen text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-ngwaGold">
          NGWA DAY
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/generate" className="hover:text-ngwaGold">Generate Flyer</Link>
          <Link href="/developer" className="hover:text-ngwaGold">Meet Developer</Link>
          <Link href="/music" className="hover:text-ngwaGold">Music</Link>

          {/* ✅ Auth Links */}
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="bg-ngwaGold text-black px-3 py-1 rounded-lg hover:bg-yellow-500"
            >
              Login
            </button>
          ) : (
            <>
              <Link href="/dashboard" className="hover:text-ngwaGold">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
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
          <Link href="/generate" className="block hover:text-ngwaGold">Generate Flyer</Link>
          <Link href="/developer" className="block hover:text-ngwaGold">Meet Developer</Link>
          <Link href="/music" className="block hover:text-ngwaGold">Music</Link>

          {/* ✅ Mobile Auth */}
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="block w-full text-left bg-ngwaGold text-black px-3 py-2 rounded-lg hover:bg-yellow-500"
            >
              Login
            </button>
          ) : (
            <>
              <Link href="/dashboard" className="block hover:text-ngwaGold">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="block w-full text-left bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
