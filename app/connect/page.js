"use client";

export default function Connect() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD700]/80 via-white to-[#B22222]/10 text-[#111] p-6">
      <div className="max-w-xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold text-[#B22222]">
          Connect With Us
        </h1>
        <p className="text-gray-700">
          Have questions, partnership ideas, or want to be part of the event?
          Send us a message!
        </p>

        <form className="space-y-4 bg-white/30 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#B22222] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-black transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
