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
    <div className="min-h-screen bg-ngwaBlack text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        
        {/* Left: Form */}
        <FlyerForm flyerData={flyerData} setFlyerData={setFlyerData} />

        {/* Right: Live Preview */}
        <FlyerPreview flyerData={flyerData} />
      </div>
    </div>
  );
}
