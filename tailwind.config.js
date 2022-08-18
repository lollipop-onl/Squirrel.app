/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Zen Kaku Gothic Antique", "sans-serif"],
    },
    extend: {
      colors: {
        "android-gray": "#1f1f1f",
      },
      keyframes: {
        "spin-vertical": {
          "0%": { transform: "rotate3d(0, 0, 0, 0deg)" },
          "100%": { transform: "rotate3d(0, 1, 0, 360deg)" },
        },
      },
      animation: {
        "spin-vertical": "spin-vertical linear 30s infinite",
      },
    },
  },
  plugins: [],
};
