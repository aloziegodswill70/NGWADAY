"use client";

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD700] via-white to-[#FFD700]/30 text-[#111] p-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#B22222]">Support Ngwa Day 2025</h1>
        <p className="text-lg text-gray-700">
          Your donation helps us preserve our heritage, empower local talent,
          and host a memorable cultural event.
        </p>

        <div className="bg-white/40 p-6 rounded-xl shadow-lg backdrop-blur-md space-y-4">
          <p className="font-semibold text-gray-800">Bank: Access Bank</p>
          <p className="font-semibold text-gray-800">Account Name: Ngwa Day Committee</p>
          <p className="font-semibold text-gray-800">Account Number: 0123456789</p>
        </div>

        <button className="bg-[#B22222] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#FFD700] hover:text-black transition-all">
          Donate Now
        </button>
      </div>
    </div>
  );
}
