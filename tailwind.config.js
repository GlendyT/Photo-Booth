/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
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
    },
  },
  plugins: [],
};
