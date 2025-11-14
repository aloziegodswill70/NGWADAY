// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#7A0A0A] text-white pt-10 pb-6 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">

        {/* SECTION 1 – ABOUT */}
        <div>
          <h3 className="text-lg font-bold text-[#FFD700] mb-3">Ngwa Day Online</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Promoting unity, culture, heritage and community strength among the Ngwa people worldwide.
          </p>
        </div>

        {/* SECTION 2 – QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-[#FFD700] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/vendors" className="hover:text-[#FFD700]">Vendors</a></li>
            <li><a href="/contents" className="hover:text-[#FFD700]">Contents</a></li>
            <li><a href="/connect" className="hover:text-[#FFD700]">Connect</a></li>
            <li><a href="/gallery" className="hover:text-[#FFD700]">Gallery</a></li>
            <li><a href="/donate" className="hover:text-[#FFD700]">Donate</a></li>
            <li><a href="/about" className="hover:text-[#FFD700]">About</a></li>
          </ul>
        </div>

        {/* SECTION 3 – CONTACT */}
        <div>
          <h3 className="text-lg font-bold text-[#FFD700] mb-3">Contact</h3>
          <p className="text-sm text-gray-200">📍 Aba, Abia State, Nigeria</p>
          <p className="text-sm text-gray-200">📞 +234 706 720 8592</p>
          <p className="text-sm text-gray-200">📧 support@ngwaday.com</p>
        </div>
      </div>

      {/* LINE BREAK */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center">
        <p className="text-xs text-gray-200">
          © {new Date().getFullYear()} Ngwa Day Online. All Rights Reserved.
        </p>

        <p className="text-xs mt-1 text-[#FFD700] font-semibold">
          Built by Dr. Godswill Alozie • Ngwa Spirit Worldwide 🌍
        </p>
      </div>
    </footer>
  );
}
