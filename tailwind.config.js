/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary: "#38579E",
        secondary: "#F3FFFF",
        "light-blue": "#dbedf7",
        "dark-blue": "#0f172a"
      },
      fontFamily: {
        cursive: ["Cedarville Cursive"]
      }
    },
  },
  plugins: [],
}

