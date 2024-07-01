/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dragimg1: "url('/src/components/img/1.png')",
        dragimg: "url('/src/components/img/bg-upload.svg')",
        backg: "url('/src/components/img/respira.png')",
      }),
      fontFamily: {
        semiboldsans: ["Recursive", "sans-serif"],
        pinyon: ["Pinyon Script", "cursive"],
        monsieur: ["Monsieur La Doulaise", "cursive"],
        passions: ["Passions Conflict", "cursive"],
        guwndolyn: ["Gwendolyn", "cursive"],
        ballet: ["Ballet", "cursive"],
      },
      colors: {
        army: "rgb(0,74,173)",
        army2: "linear-gradient(90deg, rgba(0,74,173,1) 44%, rgba(203,108,230,1) 100%)"
      }
    },
  },
  plugins: [],
};


/*
background: rgb(0,74,173);
background: linear-gradient(90deg, rgba(0,74,173,1) 44%, rgba(203,108,230,1) 100%);*/