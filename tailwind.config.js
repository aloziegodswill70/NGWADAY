// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ngwaRed: "#FF0000",
        ngwaGreen: "#006400",
        ngwaGold: "#FFD700",
        ngwaBlack: "#000000",
      },
    },
  },
  plugins: [],
};
