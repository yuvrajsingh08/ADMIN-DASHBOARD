/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

