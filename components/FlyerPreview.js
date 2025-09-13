"use client";
import Image from "next/image";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function FlyerPreview({ flyerData }) {
  const flyerRef = useRef(null);

  // ✅ Download as PNG
  const handleDownloadPNG = async () => {
    const canvas = await html2canvas(flyerRef.current, { scale: 2 });
    const link = document.createElement("a");
    link.download = "ngwa-day-flyer.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // ✅ Facebook Share
  const handleFacebookShare = async () => {
    const canvas = await html2canvas(flyerRef.current, { scale: 2 });
    const image = canvas.toDataURL("image/png");
    const blob = await (await fetch(image)).blob();
    const file = new File([blob], "ngwa-day-flyer.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Ngwa Day 2025 Flyer",
        text: "Join us for Ngwa Day 2025 on 28th December!",
      });
    } else {
      alert("Sharing not supported on this browser. Please download instead.");
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-ngwaRed mb-4 text-center">
        Flyer Preview
      </h2>

      <div
        ref={flyerRef}
        className="relative bg-white text-black w-full max-w-[320px] sm:max-w-md mx-auto aspect-[3/4] rounded-lg shadow-2xl overflow-hidden"
        style={{ border: "10px solid gold" }} // reduced border for mobile
      >
        {/* 🎨 Catchy Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ngwaGreen via-ngwaRed/70 to-ngwaBlack" />

        {/* 🐅 Elephant at Top Center */}
        <Image
          src="/images/elephant.png"
          alt="enyi"
          width={60}
          height={60}
          className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 opacity-90"
        />

        {/* 🐘 Elephants at bottom */}
        <Image
          src="/images/elephant.png"
          alt="Elephant"
          width={120}
          height={120}
          className="absolute bottom-8 left-1 opacity-20 pointer-events-none"
        />
        <Image
          src="/images/elephant.png"
          alt="Elephant"
          width={120}
          height={120}
          className="absolute bottom-8 right-1 opacity-20 pointer-events-none"
        />

        {/* 🌴 Palm Trees */}
        <Image
          src="/images/palm.png"
          alt="Palm Tree Left"
          width={80}
          height={160}
          className="absolute top-[60%] left-0 -translate-y-1/2 opacity-70 pointer-events-none"
        />
        <Image
          src="/images/palm.png"
          alt="Palm Tree Right"
          width={80}
          height={160}
          className="absolute top-[60%] right-0 -translate-y-1/2 opacity-70 pointer-events-none"
        />

        {/* NGWA DAY Title */}
        <h1 className="absolute top-14 sm:top-20 w-full text-center text-2xl sm:text-4xl font-extrabold text-ngwaGold drop-shadow-lg">
          NGWA DAY {flyerData.year}
        </h1>

        {/* 📅 Date Circles */}
        <div className="absolute top-28 sm:top-36 left-2 sm:left-4 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-ngwaRed flex items-center justify-center text-white font-bold text-[10px] sm:text-xs text-center p-1 sm:p-2 shadow-lg">
          28 Dec<br />{flyerData.year}
        </div>
        <div className="absolute top-28 sm:top-36 right-2 sm:right-4 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-ngwaRed flex items-center justify-center text-white font-bold text-[10px] sm:text-xs text-center p-1 sm:p-2 shadow-lg">
          @ Aba<br />{flyerData.year}
        </div>

        {/* 👤 Profile Photo */}
        {flyerData.image ? (
          <img
            src={flyerData.image}
            alt="Uploaded"
            className="absolute top-40 sm:top-48 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-44 sm:h-44 object-cover rounded-full border-2 sm:border-4 border-ngwaGold shadow-xl"
          />
        ) : (
          <Image
            src="/placeholder.png"
            alt="Placeholder"
            width={112}
            height={112}
            className="absolute top-40 sm:top-48 left-1/2 -translate-x-1/2 rounded-full border-2 sm:border-4 border-ngwaGold shadow-xl"
          />
        )}

        {/* 🙌 Name + Slogan */}
        <div className="absolute top-[280px] sm:top-[355px] left-1/2 -translate-x-1/2 w-[70%] sm:w-[50%] bg-black/40 rounded-lg p-1 sm:p-2 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-ngwaGold drop-shadow-lg">
            {flyerData.name || "Your Name"}
          </h3>
          <p className="text-xs sm:text-base italic text-white">
            {flyerData.slogan || "Your slogan goes here"}
          </p>
        </div>

        {/* 📍 Footer Branding */}
        <p className="absolute bottom-1 sm:bottom-2 w-full text-center text-xs sm:text-sm text-ngwaGreen px-1 sm:px-2">
          <span className="font-bold">NGWANESS: UMUNNA EHILA, NDI ERI O!</span> • Ngwa Day {flyerData.year} • NgwaFlyer
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
        <button onClick={handleDownloadPNG} className="btn-primary text-sm sm:text-base">
          Download as PNG
        </button>
        <button onClick={handleFacebookShare} className="btn-secondary text-sm sm:text-base">
          Share on Facebook
        </button>
      </div>
    </div>
  );
}
