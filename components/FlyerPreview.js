"use client";

import { useEffect, useState } from "react";

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

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
      {/* Flyer container */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[3/4] bg-ngwaBlack text-center overflow-hidden rounded-xl border-4 border-ngwaGold">
        {/* Top Elephant */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-28 md:w-32">
          <img src="/images/elephant.png" alt="Elephant" className="w-full h-auto" />
        </div>

        {/* Palm Tree Left */}
        <div className="absolute bottom-2 left-2 w-16 sm:w-24 md:w-28">
          <img src="/images/palm.png" alt="Palm Tree" className="w-full h-auto" />
        </div>

        {/* Palm Tree Right */}
        <div className="absolute bottom-2 right-2 w-16 sm:w-24 md:w-28">
          <img src="/images/palm.png" alt="Palm Tree" className="w-full h-auto" />
        </div>

        {/* User Photo */}
        {previewUrl && (
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={previewUrl}
              alt="Uploaded"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-ngwaGold shadow-lg"
            />
          </div>
        )}

        {/* Texts */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ngwaGold">
            {flyerData?.name || "Your Name Here"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white italic">
            {flyerData?.slogan || "Your slogan goes here"}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-ngwaGreen mt-2">
            Ngwa Day {flyerData?.year || "2025"}
          </p>

          {/* ✅ Extra Info Below Year */}
          <p className="text-xs sm:text-sm md:text-base text-gray-200 mt-1">
            On Dec 28, 2025 at Aba — Mark your calendar
          </p>
          <p className="text-xs sm:text-sm md:text-base text-ngwaGold font-semibold mt-1">
            Ngwaness: Umunna Ehila
          </p>
        </div>
      </div>
    </div>
  );
}
