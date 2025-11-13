// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌈 Ngwa Day Theme Colors
        ngwaRed: "#B30000",      // Deep Royal Red
        ngwaGreen: "#006400",    // Deep Forest Green
        ngwaGold: "#FFD700",     // Classic Gold
        ngwaBlack: "#000000",    // Rich Black
        ngwaWhite: "#FFF8E7",    // Soft Cream White
        goldLight: "#FFF5CC",    // Light Gold Accent
        goldDark: "#B8860B",     // Deep Gold Accent
      },

      backgroundImage: {
        // ✨ Elegant Background Gradients
        "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #FFF5E1 50%, #B30000 100%)",
        "soft-gold": "radial-gradient(circle at top left, #FFF5E1 0%, #FFD700 80%)",
      },

      boxShadow: {
        gold: "0 4px 20px rgba(255, 215, 0, 0.4)",
        soft: "0 4px 10px rgba(255, 255, 255, 0.2)",
        deep: "0 8px 30px rgba(179, 0, 0, 0.4)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      borderRadius: {
        elegant: "1.25rem", // for classy card edges
      },
    },
  },
  plugins: [],
};
