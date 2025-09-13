"use client";

export default function MusicPage() {
  const songs = [
    { title: "Igbo Drum Beats", file: "/music/music1.mp3" },
    { title: "Flute & Ogene", file: "/music/music2.mp3" },
    { title: "Cultural Dance", file: "/music/music3.mp3" },
  ];

  return (
    <div className="min-h-screen bg-ngwaBlack text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-ngwaGold">Igbo Cultural Music</h1>
        <p className="text-lg text-gray-300">
          Enjoy and download authentic Igbo traditional sounds.
        </p>

        <div className="space-y-6 mt-8">
          {songs.map((song, index) => (
            <div key={index} className="bg-black/40 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{song.title}</h2>
              <audio controls className="w-full mb-2">
                <source src={song.file} type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio>
              <a
                href={song.file}
                download
                className="bg-ngwaRed px-4 py-2 rounded-lg font-bold hover:bg-red-700"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
