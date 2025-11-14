"use client";

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD700] via-white to-[#FFD700]/30 text-[#111] p-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        
        <h1 className="text-4xl font-bold text-[#B22222]">Support Ngwa Day 2025</h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Your donation goes **directly to the developer of this website**, helping him improve the platform,
          build more cultural tools, and continue promoting and preserving our rich Ngwa heritage.
          <br /><br />
          Every contribution supports the developer's work and helps deliver a world-class cultural digital experience.
        </p>

        <div className="bg-white/40 p-6 rounded-xl shadow-lg backdrop-blur-md space-y-4">
          <p className="font-semibold text-gray-800">Bank: Fidelity Bank</p>
          <p className="font-semibold text-gray-800">Account Name: Alozie Godswill Onyendikachi</p>
          <p className="font-semibold text-gray-800">Account Number: 6321571949</p>
        </div>

        <a
          href="https://wa.me/2347067208592"
          target="_blank"
          className="inline-block bg-[#B22222] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#FFD700] hover:text-black transition-all"
        >
          Chat the Developer on WhatsApp
        </a>

      </div>
    </div>
  );
}
