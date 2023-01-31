/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        full: "1450px",
      },
      colors: {
        "white-primary": "#f0f2f5",
        "white-secondary": "#ffffff",
        "black-primary": "#161513",
        "black-secondary": "#1c1c22",
        "regal-purple": "#b16cea",
        "regal-red": "#ff5e69",
        "regal-orange": "#ff8a56",
        "regal-yellow": "#ffa84b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif"],
        bai: ["var(--font-bai-jamjuree)", "ui-sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
