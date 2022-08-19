/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Zen Kaku Gothic Antique", "sans-serif"],
      mono: ["Contrail One", "monospace"],
    },
    extend: {
      colors: {
        "android-gray": "#1f1f1f",
      },
    },
  },
  plugins: [],
};
