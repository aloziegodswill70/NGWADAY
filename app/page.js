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
              src="/images/elephant.png"
              alt="Ngwa Elephant"
              width={350}
              height={350}
              className="drop-shadow-xl"
              priority
            />
          </div>

          <Link href="/generate" className="btn-primary text-lg px-8 py-4">
            Generate Your Flyer
          </Link>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 bg-ngwaGreen/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaGold mb-6">
            About Ngwa People
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            The Ngwa people are the largest ethnic group in Abia State, Nigeria.
            Known for their rich cultural heritage, vibrant traditions, and
            strong communal life, the Ngwa are custodians of history and
            resilience. Their culture is celebrated worldwide as a symbol of
            unity and pride.
          </p>
        </div>
      </section>

      {/* ================= HISTORY SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaRed mb-6">
            History of Ngwa People
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            The Ngwa trace their origins to ancient Igbo settlements. Over
            centuries, they established thriving communities across fertile
            lands, known for agriculture, trade, and strong kinship systems.
            Ngwa land has produced leaders, warriors, and visionaries who have
            shaped Nigerian history.
          </p>
        </div>
      </section>

      {/* ================= ROYALTIES SECTION ================= */}
      <section className="py-16 bg-ngwaGreen/10">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaGold mb-6">
            Royalties (Ndi Eze)
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Ngwa land is guided by respected traditional rulers (Ndi Eze). They
            preserve culture, settle disputes, and uphold traditions. These
            royalties symbolize unity, strength, and continuity of Ngwa heritage
            across generations.
          </p>
        </div>
      </section>

      {/* ================= MARKETS SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-ngwaRed mb-6">
            Popular Markets in Ngwa Land
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Trade has always been central to Ngwa life. Some of the popular
            markets include Ariaria International Market, Ahia Ohuru, Obohia
            Market, and Ngwa Road Market. These markets are vibrant centers of
            commerce that connect Ngwa land to the world.
          </p>
        </div>
      </section>

      {/* ================= POPULAR PEOPLE SECTION ================= */}
      <section className="py-16 bg-ngwaGreen/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold text-ngwaGold mb-6 text-center">
            Popular People in Ngwa Land
          </h2>
          <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
            <p>
              Ngwa land has produced prominent leaders, scholars, artists, and
              entrepreneurs. From politics to business, music to academia, Ngwa
              sons and daughters continue to shine on the global stage, raising
              the banner of their heritage with pride.
            </p>

            <ul className="list-disc list-inside text-left space-y-2">
              <li>
                <span className="font-semibold">Paul O. Ururuka</span> – Nigerian
                nationalist and politician, notable for his leadership role in
                the Eastern Region.
              </li>
              <li>
                <span className="font-semibold">Dr. Okezie Ikpeazu</span> – Former Governor of Abia State, academic and politician.
              </li>
              <li>
                <span className="font-semibold">Senator Enyinnaya Abaribe</span> – Distinguished senator, political leader, and strong voice for Igbo people.
              </li>
              <li>
                <span className="font-semibold">Adolphus Wabara</span> – Former Senate President of Nigeria, respected elder statesman.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 40 PHOTO GRID SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-ngwaRed mb-10 text-center">
            2025 Popular People in Ngwa Land
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Paul O. Ururuka", role: "Nationalist & Politician", image: "paul.jpeg" },
              { name: "Dr. Okezie Ikpeazu", role: "Former Governor of Abia State", image: "ikpeazu.jpeg" },
              { name: "Sen. Enyinnaya Abaribe", role: "Senator & Political Leader", image: "abaribe.jpeg" },
              { name: "Adolphus Wabara", role: "Former Senate President", image: "adulphous.jpeg" },
              { name: "Chief Acho Nwakanma", role: "Former Deputy Governor", image: "acho nwakanma.jpeg" },
              { name: "Appolos Anyaso", role: "Community Leader", image: "appolos.jpeg" },
              { name: "Hon. Eziuche Ubani", role: "Former Federal Rep", image: "eziuche ubani.jpeg" },
              { name: "Toskyme", role: "Entertainer & Influencer", image: "toskyme.jpeg" },
              { name: "ACB Ukpabi", role: "Business Leader", image: "acb.jpeg" },
              { name: "Chief Allen Nwachukwu", role: "Businessman & Politician", image: "allen nwachukwu.jpeg" },
              { name: "Sen. Nkechi Nwogu", role: "Senator & Politician", image: "nkechi nwogu.jpeg" },
              { name: "Uncle Digestive", role: "Media Personality", image: "uncle digestive.jpeg" },
              { name: "Akpuda Ngwa", role: "Cultural Ambassador", image: "akpuda ngwa.jpeg" },
              { name: "Oke Abia", role: "Entertainer", image: "oke abia.jpeg" },
              { name: "Nana Nwafor", role: "Politician", image: "nana nwafor.jpeg" },
              { name: "Rufcoin Nwa Aba", role: "Musician", image: "rufcoin nwa aba.jpeg" },
              { name: "Aba Firstson", role: "Cultural Promoter", image: "aba firstson.jpeg" },
              { name: "Hon. Solomon Adaelu", role: "Lawyer & Politician", image: "solomon adaelu.jpeg" },
              { name: "Prof. Uche Ikonne", role: "Former ABSU VC", image: "prof ikonne.jpeg" },
              { name: "Eze Ikonne", role: "Traditional Ruler", image: "eze ikonne.jpeg" },
              { name: "Eze Eberechi", role: "Traditional Ruler", image: "eze eberechi.jpeg" },
              { name: "Hon. Ginger Onwusibe", role: "House of Reps Member", image: "ginger.jpeg" },
              { name: "Sen. Darlington Nwokocha", role: "Nigerian Senator", image: "nwokocha.jpeg" },
              { name: "Eze Enweremadu", role: "Monarch", image: "enwerenmadu.jpeg" },
              // You can continue filling until 40
            ].map((person, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 overflow-hidden">
                  <Image
                    src={`/images/${person.image}`}
                    alt={person.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{person.name}</h3>
                <p className="text-sm text-gray-300">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
