"use client";

export default function Gallery() {
  const images = ["/images/enyi.jpg", "/images/ngwa1.jpg", "/images/ngwa2.jpg"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFD700]/40 to-[#B22222]/20 text-[#111] p-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#B22222]">Event Gallery</h1>
        <p className="text-gray-700">Memories from past and upcoming Ngwa Day events.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={src} alt="Gallery" className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
