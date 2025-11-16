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
      allowTaint: true,
      imageTimeout: 0,
      backgroundColor: "#ffffff",
      onclone: (clonedDoc) => {
        const clonedFlyer = clonedDoc.getElementById("flyer-canvas");
        clonedFlyer.style.transform = "none";
        clonedFlyer.style.opacity = "1";
      },
    });
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);

      if (previewUrl) {
        await new Promise((resolve) => {
          const img = new Image();
          img.src = previewUrl;
          img.onload = resolve;
          img.onerror = resolve;
        });
      }

      const canvas = await generateCanvas();
      if (!canvas) return;

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "ngwa-day-flyer.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
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

      {/* CANVAS */}
      <div
        id="flyer-canvas"
        className="relative w-full max-w-[22rem] sm:max-w-sm md:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex flex-col justify-between"
        style={{
          background:
            "linear-gradient(180deg, #0A5C0A 0%, #1C7F1C 60%, #0A5C0A 100%)",
        }}
      >

        {/* LOGO (Top Left) */}
        <img
          src="/images/logongwaday.png"
          alt="Logo"
          className="absolute top-2 left-2 w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-md"
        />

        {/* ELEPHANT (Bottom Right) */}
        <img
          src="/images/elephant.png"
          alt="Elephant"
          className="absolute bottom-2 right-2 w-14 h-14 sm:w-16 sm:h-16 object-contain opacity-90 drop-shadow-lg"
        />

        {/* HEADER */}
        <div className="pt-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-300 drop-shadow">
            NGWA DAY
          </h1>
          <h2 className="text-4xl sm:text-5xl font-black text-white drop-shadow">
            {flyerData?.year || "2025"}
          </h2>
        </div>

        {/* USER PHOTO */}
        {previewUrl && (
          <div className="flex justify-center items-center px-4 mt-2">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={previewUrl}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* TEXT CONTENT */}
        <div className="text-center px-4 sm:px-6 mt-3 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {flyerData?.name || "Your Name Here"}
          </h3>

          <p className="italic text-sm sm:text-base text-white/90">
            {flyerData?.slogan || "Ngwa Eye Doctor and Tech Guru"}
          </p>

          <div className="h-[2px] w-20 bg-yellow-300 mx-auto my-2"></div>

          <p className="text-base sm:text-lg font-semibold text-yellow-200">
            Theme:{" "}
            <span className="text-white font-bold italic">
              Ngwaness: Umunna Ehila
            </span>
          </p>

          <p className="text-sm sm:text-base text-white">
            📍 Ngwa High School, Aba
          </p>

          <p className="text-sm sm:text-base text-white">
            📅 Dec 28, 2025 — Mark your calendar!
          </p>
        </div>

        <div className="h-6"></div>
      </div>

      {/* BUTTONS */}
      <div className="flex space-x-3">
        <button
          onClick={handleDownload}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-200 transition"
        >
          {downloading ? "Preparing..." : "Download"}
        </button>

        <button
          onClick={handleShare}
          className="bg-green-800 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-900 transition"
        >
          {sharing ? "Sharing..." : "Share"}
        </button>
      </div>
    </div>
  );
}
