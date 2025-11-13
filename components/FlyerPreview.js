"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

export default function FlyerPreview({ flyerData }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!flyerData?.image) return setPreviewUrl(null);

    if (typeof flyerData.image === "string") {
      setPreviewUrl(flyerData.image);
    } else {
      const objectUrl = URL.createObjectURL(flyerData.image);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [flyerData?.image]);

  // Download as image
  const handleDownload = () => {
    const flyer = document.getElementById("flyer-canvas");
    if (!flyer) return;

    html2canvas(flyer, { backgroundColor: null }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "ngwa-day-flyer.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  // Share via device
  const handleShare = async () => {
    const flyer = document.getElementById("flyer-canvas");
    if (!flyer) return;

    const canvas = await html2canvas(flyer, { backgroundColor: null });
    canvas.toBlob(async (blob) => {
      const file = new File([blob], "ngwa-day-flyer.png", { type: "image/png" });

      if (navigator.share) {
        await navigator.share({
          title: "Ngwa Day Flyer",
          text: "Check out my Ngwa Day flyer!",
          files: [file],
        });
      } else {
        alert("Sharing not supported on this device.");
      }
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Flyer Container */}
      <div
        id="flyer-canvas"
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        style={{
          background: "linear-gradient(135deg, #D4AF37, #FFD700)",
        }}
      >
        {/* Golden overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 via-transparent to-yellow-700/20"></div>

        {/* Top Section */}
        <div className="absolute top-6 left-6 text-left text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold drop-shadow-lg">
            NGWA DAY
          </h1>
          <h2 className="text-4xl sm:text-5xl font-black text-red-600 drop-shadow-lg">
            {flyerData?.year || "2025"}
          </h2>
        </div>

        {/* User Photo */}
        {previewUrl && (
          <div className="absolute top-1/2 left-6 -translate-y-1/2">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={previewUrl}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Event Details */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-left space-y-2 max-w-[55%]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
            {flyerData?.name || "Your Name Here"}
          </h3>
          <p className="italic text-sm sm:text-base text-gray-100">
            {flyerData?.slogan || "Your slogan goes here"}
          </p>
          <div className="h-[2px] w-16 bg-red-500 my-2"></div>

          <p className="text-base sm:text-lg font-semibold text-green-200">
            Theme:{" "}
            <span className="text-white font-bold italic">
              Ngwaness: Umunna Ehila
            </span>
          </p>
          <p className="text-sm sm:text-base text-gray-100">
            📍 Ngwa High School, Aba
          </p>
          <p className="text-sm sm:text-base text-gray-100">
            📅 Dec 28, 2025 — Mark your calendar!
          </p>
        </div>

        {/* Subtle footer highlight */}
        <div className="absolute bottom-0 w-full h-10 bg-white/10 backdrop-blur-sm rounded-t-2xl"></div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleDownload}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-100"
        >
          Download
        </button>
        <button
          onClick={handleShare}
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-700"
        >
          Share
        </button>
      </div>
    </div>
  );
}
