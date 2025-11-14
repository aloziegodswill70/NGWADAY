"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

export default function FlyerPreview({ flyerData }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [sharing, setSharing] = useState(false);

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

  const generateCanvas = async () => {
    const flyer = document.getElementById("flyer-canvas");
    if (!flyer) return null;

    return await html2canvas(flyer, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);

      const canvas = await generateCanvas();
      if (!canvas) return;

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "ngwa-day-flyer.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      alert("Error downloading flyer. Try again.");
    } finally {
      setDownloading(false);
    }
  };

  const handleShare = async () => {
    try {
      setSharing(true);

      const canvas = await generateCanvas();
      if (!canvas) return;

      canvas.toBlob(async (blob) => {
        if (!blob) {
          alert("Failed to prepare file.");
          setSharing(false);
          return;
        }

        const file = new File([blob], "ngwa-day-flyer.png", {
          type: "image/png",
        });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: "Ngwa Day Flyer",
            text: "Check out my custom Ngwa Day flyer!",
            files: [file],
          });
        } else {
          alert("Sharing not supported on this device.");
        }

        setSharing(false);
      });
    } catch (err) {
      alert("Error sharing flyer.");
      setSharing(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Flyer Container */}
      <div
        id="flyer-canvas"
        className="relative w-full max-w-[22rem] sm:max-w-sm md:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex flex-col justify-between"
        style={{
          background:
            "linear-gradient(180deg, #FFD700 0%, #FFF8DC 60%, #FFD700 100%)",
        }}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-red-700">
            NGWA DAY
          </h1>
          <h2 className="text-4xl sm:text-5xl font-black text-red-600 tracking-tight">
            {flyerData?.year || "2025"}
          </h2>
        </div>

        {/* Image Section */}
        {previewUrl && (
          <div className="flex justify-center items-center px-4">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={previewUrl}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="text-center px-4 sm:px-6 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#222]">
            {flyerData?.name || "Your Name Here"}
          </h3>

          <p className="italic text-sm sm:text-base text-[#333] opacity-80">
            {flyerData?.slogan || "Ngwa Eye Doctor and Tech Guru"}
          </p>

          <div className="h-[2px] w-20 bg-red-600 mx-auto my-2"></div>

          <p className="text-base sm:text-lg font-semibold text-green-800">
            Theme:{" "}
            <span className="text-red-700 font-bold italic">
              Ngwaness: Umunna Ehila
            </span>
          </p>

          <p className="text-sm sm:text-base text-[#222] flex flex-col items-center">
            📍 Ngwa High School, Aba
          </p>

          <p className="text-sm sm:text-base text-[#222]">
            📅 Dec 28, 2025 — Mark your calendar!
          </p>
        </div>

        <div className="h-6 bg-gradient-to-t from-yellow-400/40 to-transparent"></div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        {/* DOWNLOAD BUTTON */}
        <button
          onClick={handleDownload}
          disabled={downloading || sharing}
          className={`bg-white text-black px-4 py-2 rounded-lg font-semibold shadow transition flex items-center gap-2 ${
            downloading || sharing
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-100"
          }`}
        >
          {downloading ? (
            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Download"
          )}
        </button>

        {/* SHARE BUTTON */}
        <button
          onClick={handleShare}
          disabled={sharing || downloading}
          className={`bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition flex items-center gap-2 ${
            sharing || downloading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-800"
          }`}
        >
          {sharing ? (
            <div className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Share"
          )}
        </button>
      </div>
    </div>
  );
}
