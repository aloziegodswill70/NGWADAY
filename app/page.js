// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#FFD700] via-white to-[#FFD700]/90 text-ngwaBlack min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/70 via-white/80 to-[#B22222]/30 -z-10" />

        <div className="max-w-3xl mx-auto space-y-6 backdrop-blur-md bg-white/10 rounded-2xl shadow-2xl p-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#B22222] drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]">
            NGWA DAY 2025
          </h1>

          <p className="text-lg md:text-xl text-[#FFD700] font-semibold tracking-wide">
            Celebrate Culture • Celebrate Unity • Celebrate Ngwa Land
          </p>

          <div className="flex justify-center">
            <Image
              src="/images/enyi.jpg"
              alt="Ngwa Symbol"
              width={240}
              height={240}
              className="rounded-full shadow-lg border-4 border-[#FFD700]"
              priority
            />
          </div>

          <Link
            href="/generate"
            className="bg-[#B22222] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-[#FFD700] hover:text-black transition-all duration-300"
          >
            Generate Your Flyer
          </Link>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <Section
        title="About Ngwa People"
        color="gold"
        text="The Ngwa people are the largest ethnic group in Abia State, Nigeria. Known for their rich cultural heritage, vibrant traditions, and strong communal life, the Ngwa are custodians of history and resilience. Their culture is celebrated worldwide as a symbol of unity and pride."
      />

      {/* ================= HISTORY SECTION ================= */}
      <Section
        title="History of Ngwa People"
        color="red"
        text="The Ngwa trace their origins to ancient Igbo settlements. Over centuries, they established thriving communities across fertile lands, known for agriculture, trade, and strong kinship systems. Ngwa land has produced leaders, warriors, and visionaries who have shaped Nigerian history."
      />

      {/* ================= ROYALTIES SECTION ================= */}
      <Section
        title="Royalties (Ndi Eze)"
        color="gold"
        text="Ngwa land is guided by respected traditional rulers (Ndi Eze). They preserve culture, settle disputes, and uphold traditions. These royalties symbolize unity, strength, and continuity of Ngwa heritage across generations."
      />

      {/* ================= MARKETS SECTION ================= */}
      <Section
        title="Popular Markets in Ngwa Land"
        color="red"
        text="Trade has always been central to Ngwa life. Some of the popular markets include Ariaria International Market, Ahia Ohuru, Obohia Market, and Ngwa Road Market. These markets are vibrant centers of commerce that connect Ngwa land to the world."
      />

      {/* ================= POPULAR PEOPLE SECTION ================= */}
      <Section
        title="Popular People in Ngwa Land"
        color="gold"
        text="Ngwa land has produced prominent leaders, scholars, artists, and entrepreneurs. From politics to business, music to academia, Ngwa sons and daughters continue to shine on the global stage, raising the banner of their heritage with pride."
      />
    </div>
  );
}

// ================= REUSABLE SECTION COMPONENT =================
function Section({ title, color, text }) {
  const titleColor =
    color === "red"
      ? "text-[#B22222]"
      : color === "gold"
      ? "text-[#FFD700]"
      : "text-white";

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#FFD700]/50">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${titleColor} drop-shadow-md`}
        >
          {title}
        </h2>
        <p className="text-lg text-gray-900 font-medium leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
}
