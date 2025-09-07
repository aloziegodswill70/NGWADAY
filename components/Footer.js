// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-ngwaGreen text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ngwa Day Online. All rights reserved.
        </p>
        <p className="text-xs text-ngwaGold mt-2">
          Powered by NgwaFlyer • Celebrate Culture, Celebrate Unity.
        </p>
      </div>
    </footer>
  );
}
