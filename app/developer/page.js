// app/developer/page.js
import Image from "next/image";

export default function DeveloperPage() {
  return (
    <div className="bg-ngwaBlack text-white min-h-screen py-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-6">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-ngwaGold shadow-lg">
            <Image
              src="/images/developer.jpg" // replace with your own photo
              alt="Site Developer"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name & Role */}
        <h1 className="text-3xl md:text-4xl font-bold text-ngwaGold">
          Meet the Site Developer
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hello 👋, I am <span className="font-semibold text-white">Dr. Godswill Alozie</span>, 
          a passionate web developer with experience in building modern, 
          responsive, and culturally impactful websites. I created this platform 
          to showcase and celebrate the heritage of the great <span className="text-ngwaRed">Ngwa people</span>.
        </p>

        {/* Skills or Tools */}
        <div className="bg-ngwaGreen/10 p-6 rounded-xl shadow-md space-y-3">
          <h2 className="text-2xl font-semibold text-ngwaGold">My Skills</h2>
          <p className="text-gray-300">
            Web and Mobile App Development
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-ngwaGold">Let’s Connect</h3>
          <p className="text-gray-300">
            Email: <a href="mailto:aloziegodswill70@gmail.com" className="text-ngwaRed underline">aloziegodswill70@gmail.com</a>
          </p>
          <p className="text-gray-300">
            WhatsApp: <a href="https://wa.me/2347067208592" className="text-ngwaRed underline">+234 706 720 8592</a>
          </p>
        </div>
      </div>
    </div>
  );
}
