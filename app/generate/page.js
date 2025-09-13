"use client";

import { useState } from "react";
import FlyerForm from "@/components/FlyerForm";
import FlyerPreview from "@/components/FlyerPreview";

export default function GeneratePage() {
  const [flyerData, setFlyerData] = useState({
    name: "",
    slogan: "",
    year: "2025",
    image: null,
  });

  return (
    <div className="min-h-screen bg-ngwaBlack text-white py-6 sm:py-12">
      <div className="container mx-auto px-3 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        {/* Left: Form */}
        <div className="order-2 md:order-1">
          <FlyerForm flyerData={flyerData} setFlyerData={setFlyerData} />
        </div>

        {/* Right: Live Preview */}
        <div className="order-1 md:order-2">
          <FlyerPreview flyerData={flyerData} />
        </div>
      </div>
    </div>
  );
}
