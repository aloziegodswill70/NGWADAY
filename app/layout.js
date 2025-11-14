import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata = {
  title: "Ngwa Day Online | Ngwa Day 2025",
  description:
    "Generate custom flyers, memes, and cultural content for Ngwa Day 2025 and the wider Ngwa community worldwide.",
  keywords: [
    "Ngwa Day",
    "Ngwa in diaspora",
    "Ngwa Day 2025",
    "Ngwa Day celebration",
    "Aba Ngwa",
    "Ngwa Day memes",
    "Ngwa Day flyers",
    "Ngwa vendors",
    "Ngwa culture",
    "Ngwa high school",
    "Alangwa",
    "Ngwa People",
    "Abia State culture",
    "Ngwa community",
  ],
  openGraph: {
    title: "Ngwa Day Online | Ngwa Day 2025",
    description:
      "Create custom Ngwa Day flyers, memes, countdowns, and more. Promote Ngwa culture globally.",
    url: "https://ngwa-day-online.vercel.app",
    siteName: "Ngwa Day Online",
    images: [
      {
        url: "/logo.png", // ✅ Your logo
        width: 600,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngwa Day Online | Ngwa Day 2025",
    description:
      "Generate Ngwa Day flyers, posters, memes, countdown cards and more.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/image/logongwaday.png", // favicon/logo
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-gradient-to-b from-[#FFD700] via-white to-[#FFD700]/40 text-black min-h-screen flex flex-col">

        <Providers>
          <Navbar />

          {/* PAGE BODY */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
