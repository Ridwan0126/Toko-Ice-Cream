/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "sans-serif"],
      },
      colors: {
        customgray: "#59427a",
        primary: "#c83349",
        secondary: "#e06377",
        tertiary: "#eeac99",
        fourth: "#f9d5e5",
      },
    },
  },
  plugins: [],
};
