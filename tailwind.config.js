/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "dragimg" :"url('/src/components/img/bg-upload.svg')",
        "backg" :"url('/src/components/img/bg.jpg')",
        "backg1" :"url('/src/components/img/bg2.png')",
        "backg2" :"url('/src/components/img/bg3.png')",
        "backg3" :"url('/src/components/img/bg4.png')",
      }),
      colors: {
        "yellow": "#FFFF00"
      }
    },
  },
  plugins: [],
}

