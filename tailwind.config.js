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
      // primary: '#00598d',
      primary: '#044E98',
      secondary: "#5e8dbc",
      dark: '#333333',
    },

    },
  },
  plugins: [require("daisyui")],
}