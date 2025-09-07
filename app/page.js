// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-ngwaBlack text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-ngwaGreen/40 via-ngwaBlack to-ngwaBlack -z-10" />

        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-ngwaRed drop-shadow-lg">
            NGWA DAY 2025
          </h1>

          <p className="text-lg md:text-xl text-ngwaGold font-medium">
            Celebrate Culture • Celebrate Unity • Celebrate Ngwa Land
          </p>

          <div className="flex justify-center">
            <Image
              src="/images/enyi.jpg"
              alt="Ngwa Elephant"
              width={250}
              height={250}
              className="drop-shadow-xl"
              priority
            />
          </div>

          <Link
            href="/generate"
            className="btn-primary text-lg px-8 py-4"
          >
            Generate Your Flyer
          </Link>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 bg-ngwaGreen/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaGold mb-6">About Ngwa People</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            The Ngwa people are the largest ethnic group in Abia State, Nigeria. 
            Known for their rich cultural heritage, vibrant traditions, and strong 
            communal life, the Ngwa are custodians of history and resilience. 
            Their culture is celebrated worldwide as a symbol of unity and pride.
          </p>
        </div>
      </section>

      {/* ================= HISTORY SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaRed mb-6">History of Ngwa People</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            The Ngwa trace their origins to ancient Igbo settlements. 
            Over centuries, they established thriving communities 
            across fertile lands, known for agriculture, trade, and 
            strong kinship systems. Ngwa land has produced leaders, 
            warriors, and visionaries who have shaped Nigerian history.
          </p>
        </div>
      </section>

      {/* ================= ROYALTIES SECTION ================= */}
      <section className="py-16 bg-ngwaGreen/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaGold mb-6">Royalties (Ndi Eze)</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Ngwa land is guided by respected traditional rulers (Ndi Eze). 
            They preserve culture, settle disputes, and uphold traditions. 
            These royalties symbolize unity, strength, and continuity of 
            Ngwa heritage across generations.
          </p>
        </div>
      </section>

      {/* ================= MARKETS SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaRed mb-6">Popular Markets in Ngwa Land</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Trade has always been central to Ngwa life. Some of the 
            popular markets include Ariaria International Market, Ahia Ohuru, 
            Obohia Market, and Ngwa Road Market. These markets are vibrant 
            centers of commerce that connect Ngwa land to the world.
          </p>
        </div>
      </section>

      {/* ================= POPULAR PEOPLE SECTION ================= */}
      <section className="py-16 bg-ngwaGreen/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaGold mb-6">Popular People in Ngwa Land</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Ngwa land has produced prominent leaders, scholars, artists, 
            and entrepreneurs. From politics to business, music to academia, 
            Ngwa sons and daughters continue to shine on the global stage, 
            raising the banner of their heritage with pride.
          </p>
        </div>
      </section>
    </div>
  );
}
