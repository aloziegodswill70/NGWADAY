'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const buttons = [
    { label: 'Vendors', href: '/vendors', color: 'bg-[#B22222]' },
    { label: 'Contents', href: '/contents', color: 'bg-[#FFD700]' },
    { label: 'Connect', href: '/connect', color: 'bg-[#006400]' },
    { label: 'Gallery', href: '/gallery', color: 'bg-white text-[#B22222]' },
    { label: 'Donate', href: '/donate', color: 'bg-[#B22222]' },
    { label: 'meme', href: '/meme', color: 'bg-white text-[#B22222]' },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700] via-white to-[#B22222]/30 -z-10"></div>

      {/* Hero content */}
      <div className="max-w-3xl mx-auto px-4 space-y-6 mt-10 sm:mt-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#B22222] drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]">
          NGWA DAY 2025
        </h1>

        <p className="text-lg md:text-xl text-[#FFD700] font-semibold tracking-wide">
          Culture • Unity • Celebration
        </p>

        {/* Central image */}
        <div className="flex justify-center">
          <Image
            src="/images/enyi.jpg"
            alt="Ngwa Symbol"
            width={220}
            height={220}
            className="rounded-full shadow-lg border-4 border-[#FFD700]"
            priority
          />
        </div>

        {/* Buttons grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          {buttons.map((btn, index) => (
            <Link
              key={index}
              href={btn.href}
              className={`flex items-center justify-center text-center py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${btn.color}`}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-sm text-black/70">
          Experience the beauty and pride of Ngwa Land — December 28th, 2025
        </p>
      </div>
    </section>
  );
}
