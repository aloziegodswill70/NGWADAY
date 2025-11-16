"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";

export default function MemeCountdownPage() {
  const [count, setCount] = useState("");
  const [caption, setCaption] = useState("");
  const [generated, setGenerated] = useState(false);
  const [memeImg, setMemeImg] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");

  const cardRef = useRef(null);

  const memeCharacters = [
    "/memes/tortoise-dance.png",
    "/memes/elephant-laugh.png",
    "/memes/palmfruit-mouth.png",
  ];

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setUploadedImg(imageUrl);
  };

  const generateCard = () => {
    if (!count) return;
    const randomMeme =
      memeCharacters[Math.floor(Math.random() * memeCharacters.length)];
    setMemeImg(randomMeme);

    setGenerated(true);
  };

  const downloadImage = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "countdown-meme.png";
    link.click();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-green-800 drop-shadow">
        Ngwa Cultural Meme Countdown Generator
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Countdown (e.g. 3 Days to Go)"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="w-full p-3 border rounded-lg text-black"
        />

        <input
          type="text"
          placeholder="Short caption (optional)"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-3 border rounded-lg text-black"
        />

        {/* Upload image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="w-full p-3 border rounded-lg bg-gray-50"
        />

        <button
          onClick={generateCard}
          className="bg-green-700 text-white w-full py-3 rounded-lg font-bold shadow-lg hover:bg-green-800 transition"
        >
          Generate Meme Card
        </button>
      </div>

      {/* GENERATED MEME CARD */}
      {generated && (
        <div className="mt-8">
          <div
            ref={cardRef}
            className="relative w-full max-w-full rounded-2xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col justify-center items-center aspect-[4/5]"
            style={{
              background:
                "linear-gradient(160deg, #064d06 0%, #0b6d0b 60%, #064d06 100%)",
            }}
          >
            {/* LOGO AT TOP */}
            <img
              src="/images/logongwaday.png"
              alt="Logo"
              className="absolute top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 object-contain opacity-95 drop-shadow"
            />

            {/* USER IMAGE */}
            {uploadedImg && (
              <img
                src={uploadedImg}
                alt="User Upload"
                className="absolute top-16 sm:top-20 left-3 w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-xl border-2 border-white shadow-lg"
              />
            )}

            {/* FUNNY MEME CHARACTER BOTTOM-LEFT */}
            <img
              src="/images/dancingtortoise.png"
              alt="Meme"
              className="absolute bottom-2 left-2 w-24 sm:w-32 object-contain drop-shadow-xl"
            />

            {/* LAUGHING ELEPHANT TOP-RIGHT */}
            <img
              src="/images/laughing elephant.png"
              alt="Elephant"
              className="absolute top-2 right-2 w-16 sm:w-24 opacity-90 object-contain drop-shadow-xl"
            />

            {/* COUNTDOWN TEXT */}
            <p className="text-4xl sm:text-5xl font-black text-yellow-300 drop-shadow-2xl text-center tracking-tight px-4 mt-6">
              {count}
            </p>

            {/* CAPTION BELOW */}
            {caption && (
              <p className="text-md sm:text-xl text-white mt-3 font-semibold drop-shadow text-center px-3">
                {caption}
              </p>
            )}

            {/* FOOTER TAG */}
            <p className="mt-4 text-xs sm:text-sm italic text-white/80 text-center">
              Ngwa Day Countdown Meme • Share & Laugh 😄🔥
            </p>
          </div>

          {/* DOWNLOAD BUTTON */}
          <button
            onClick={downloadImage}
            className="mt-5 bg-yellow-600 text-black w-full py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-700 transition"
          >
            Download Meme Card
          </button>
        </div>
      )}
    </div>
  );
}
