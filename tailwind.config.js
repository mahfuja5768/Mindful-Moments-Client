/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    colors: {
      primary: '#00598d',
      secondary: "#4c8aaf",
      dark: '#333333',
    },

    },
  },
  plugins: [require("daisyui")],
}