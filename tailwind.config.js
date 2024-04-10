/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "dragimg" :"url('/src/components/img/bg-upload.svg')",
      })
    },
  },
  plugins: [],
}

