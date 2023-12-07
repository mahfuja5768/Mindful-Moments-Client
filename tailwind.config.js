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
      primary: '#B24400',
      secondary: "#ff6200",
      dark: '#333333',
    },

    },
  },
  plugins: [require("daisyui")],
}