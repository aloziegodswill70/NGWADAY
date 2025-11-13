"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD700]/80 via-white to-[#B22222]/20 text-[#111] p-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#B22222]">About Ngwa Day</h1>
        <p className="text-gray-700 text-lg">
          Ngwa Day is an annual celebration that honors the culture, unity, and
          excellence of the Ngwa people. It serves as a platform for promoting
          peace, development, and pride in our heritage.
        </p>

        <div className="bg-white/40 p-6 rounded-xl shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-bold text-[#B22222] mb-3">Our Vision</h2>
          <p className="text-gray-800">
            To unite all Ngwa sons and daughters globally and celebrate our
            shared identity.
          </p>

          <h2 className="text-2xl font-bold text-[#B22222] mt-6 mb-3">Our Mission</h2>
          <p className="text-gray-800">
            To preserve Ngwa traditions, support youth empowerment, and showcase
            cultural excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
