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
      <h2 className="text-2xl font-bold text-ngwaRed mb-4">Flyer Preview</h2>

      <div
        ref={flyerRef}
        className="relative bg-white text-black w-full max-w-md mx-auto aspect-[3/4] rounded-lg shadow-2xl overflow-hidden"
        style={{
          border: "15px solid gold", // 🌟 Golden Frame
        }}
      >
        {/* 🎨 Catchy Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ngwaGreen via-ngwaRed/70 to-ngwaBlack" />

        {/* 🐅 Tiger Head at Top Center */}
        <Image
          src="/images/elephant.png"
          alt="enyi"
          width={80}
          height={80}
          className="absolute top-2 left-1/2 -translate-x-1/2 opacity-90"
        />

        {/* 🐘 Elephant bottom-right */}
        <Image
          src="/images/elephant.png"
          alt="Elephant"
          width={200}
          height={200}
          className="absolute bottom-10 left-2 opacity-20 pointer-events-none"
        />

        {/* 🐘 Elephant bottom-right */}
        <Image
          src="/images/elephant.png"
          alt="Elephant"
          width={200}
          height={200}
          className="absolute bottom-10 right-2 opacity-20 pointer-events-none"
        />

        {/* NGWA DAY Title */}
        <h1 className="absolute top-20 w-full text-center text-4xl font-extrabold text-ngwaGold drop-shadow-lg">
          NGWA DAY {flyerData.year}
        </h1>

        {/* 📅 Date inside circle */}
        <div className="absolute top-36 left-4 w-20 h-20 rounded-full bg-ngwaRed flex items-center justify-center text-white font-bold text-xs text-center p-2 shadow-lg">
          28 Dec<br />{flyerData.year}
        </div>

        <div className="absolute top-36 right-4 w-20 h-20 rounded-full bg-ngwaRed flex items-center justify-center text-white font-bold text-xs text-center p-2 shadow-lg">
          @ Aba<br />{flyerData.year}
        </div>


        {/* 👤 Profile Photo */}
        {flyerData.image ? (
          <img
            src={flyerData.image}
            alt="Uploaded"
            className="absolute top-48 left-1/2 -translate-x-1/2 w-44 h-44 object-cover rounded-full border-4 border-ngwaGold shadow-xl"
          />
        ) : (
          <Image
            src="/placeholder.png"
            alt="Placeholder"
            width={176}
            height={176}
            className="absolute top-48 left-1/2 -translate-x-1/2 rounded-full border-4 border-ngwaGold shadow-xl"
          />
        )}

        {/* 🙌 Name */}
        <h3 className="absolute top-[380px] w-full text-center text-2xl font-bold text-white drop-shadow-lg">
          {flyerData.name || "Your Name"}
        </h3>

        {/* 🌍 Theme of the Cultural Day */}
        <p className="absolute bottom-28 w-full text-center text-lg font-semibold text-ngwaGold italic px-4">
          NGWANESS: UMUNNA EHILA NDI ERI O!
        </p>

        {/* 📝 Slogan */}
        <p className="absolute bottom-16 w-full text-center text-lg text-white italic px-4">
          {flyerData.slogan || "Your slogan goes here"}
        </p>

        {/* 📍 Footer Branding */}
        <p className="absolute bottom-4 w-full text-center text-sm text-ngwaGold">
          Ngwa Day {flyerData.year} • NgwaFlyer
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
        <button onClick={handleDownloadPNG} className="btn-primary">
          Download as PNG
        </button>
        <button onClick={handleFacebookShare} className="btn-secondary">
          Share on Facebook
        </button>
      </div>
    </div>
  );
}
