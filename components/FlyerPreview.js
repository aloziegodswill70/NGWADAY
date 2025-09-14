"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas"; // ✅ import added

export default function FlyerPreview({ flyerData }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!flyerData?.image) {
      setPreviewUrl(null);
      return;
    }

    if (typeof flyerData.image === "string") {
      setPreviewUrl(flyerData.image);
      return;
    }

    // if it's a File object, create a URL
    const objectUrl = URL.createObjectURL(flyerData.image);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [flyerData?.image]);

  // ✅ function to download flyer
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

  // ✅ function to share flyer
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
      {/* Flyer container */}
      <div
        id="flyer-canvas"
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[3/4] bg-ngwaBlack text-center overflow-hidden rounded-xl border-4 border-ngwaGold"
      >
        {/* Top Elephant */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-28 md:w-32">
          <img src="/images/elephant.png" alt="Elephant" className="w-full h-auto" />
        </div>

        {/* User Photo */}
        {previewUrl && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2">
            <img
              src={previewUrl}
              alt="Uploaded"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-ngwaGold shadow-lg"
            />
          </div>
        )}

        {/* Bottom Section */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-full px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ngwaGold">
            {flyerData?.name || "Your Name Here"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white italic">
            {flyerData?.slogan || "Your slogan goes here"}
          </p>
        </div>

        {/* ✅ White framed transparent info block between palms */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] bg-white/80 text-black rounded-lg shadow-md p-2 sm:p-3 text-center">
          <p className="text-lg sm:text-xl font-bold">NGWA DAY {flyerData?.year || "2025"}</p>
          <p className="text-xs sm:text-sm mt-1">On Dec 28, 2025 at Aba — Mark your calendar</p>
          <p className="text-xs sm:text-sm text-ngwaGreen font-semibold mt-1">
            Ngwaness: Umunna Ehila
          </p>
        </div>

        {/* Palm Trees */}
        <div className="absolute bottom-2 left-2 w-16 sm:w-24 md:w-28">
          <img src="/images/palm.png" alt="Palm Tree" className="w-full h-auto" />
        </div>
        <div className="absolute bottom-2 right-2 w-16 sm:w-24 md:w-28">
          <img src="/images/palm.png" alt="Palm Tree" className="w-full h-auto" />
        </div>
      </div>

      {/* ✅ Download & Share buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleDownload}
          className="bg-ngwaGold text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-400"
        >
          Download
        </button>
        <button
          onClick={handleShare}
          className="bg-ngwaGreen text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-600"
        >
          Share
        </button>
      </div>
    </div>
  );
}
