"use client";

import Link from "next/link";

export default function Vendors() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD700] via-white to-[#B22222]/20 text-[#111] p-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#B22222] drop-shadow-lg">
          Vendors & Exhibitors
        </h1>
        <p className="text-lg text-gray-700">
          Be part of the NGWA DAY 2025 celebration by showcasing your products,
          crafts, food, or cultural items. Vendors from all walks of life are
          welcome to exhibit and connect with thousands of attendees.
        </p>

        <div className="bg-white/30 p-6 rounded-xl shadow-lg backdrop-blur-md space-y-4">
          <h2 className="text-2xl font-semibold text-[#B22222]">
            Why You Should Join
          </h2>
          <ul className="text-left list-disc list-inside text-gray-800 space-y-2">
            <li>Promote your business or brand</li>
            <li>Meet new clients and partners</li>
            <li>Celebrate Ngwa culture through trade</li>
          </ul>
        </div>

        <Link
          href="/connect"
          className="bg-[#B22222] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#FFD700] hover:text-black transition-all duration-300"
        >
          Contact Organizers
        </Link>
      </div>
    </div>
  );
}
