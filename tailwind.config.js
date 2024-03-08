/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gr: "#333333",
        blgr: "#2d2d2d",
        whgr: "#838383",
      },
    },
  },
  plugins: [],
};
