"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-[#0B3D0B] text-white shadow-lg"> 
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* LOGO + TITLE */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/images/logongwaday.png"
            alt="Ngwa Logo"
            className="w-10 h-10 rounded-full border-2 border-yellow-500"
          />
          <span className="text-2xl font-bold text-yellow-400 drop-shadow">
            NGWA DAY
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/generate" className="hover:text-yellow-400 transition">
            Generate Flyer
          </Link>

          <Link href="/developer" className="hover:text-yellow-400 transition">
            Meet Developer
          </Link>

          <Link href="/music" className="hover:text-yellow-400 transition">
            Music
          </Link>

          {/* AUTH */}
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="bg-yellow-400 text-black px-3 py-1 rounded-lg hover:bg-yellow-500 font-semibold"
            >
              Login
            </button>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="hover:text-yellow-400 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#062B06] text-white px-4 py-4 space-y-3 border-t border-green-900">
          <Link href="/generate" className="block hover:text-yellow-400">
            Generate Flyer
          </Link>

          <Link href="/developer" className="block hover:text-yellow-400">
            Meet Developer
          </Link>

          <Link href="/music" className="block hover:text-yellow-400">
            Music
          </Link>

          {/* AUTH */}
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="block w-full text-left bg-yellow-400 text-black px-3 py-2 rounded-lg hover:bg-yellow-500 font-semibold"
            >
              Login
            </button>
          ) : (
            <>
              <Link href="/dashboard" className="block hover:text-yellow-400">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="block w-full text-left bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 font-semibold"
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
