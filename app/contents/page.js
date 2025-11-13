"use client";

export default function Contents() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD700] via-white to-[#FFD700]/30 text-[#111] p-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#B22222]">
          Cultural Contents
        </h1>
        <p className="text-lg text-gray-700">
          Discover performances, dances, songs, and exhibitions that express the
          rich cultural heritage of Ngwa land.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Dance Troupe", "Traditional Wrestling", "Cultural Parade"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-white/40 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-[#B22222]">{item}</h2>
                <p className="text-gray-700 mt-2">
                  Experience the energy and unity of our culture.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
