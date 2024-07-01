/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dragimg1: "url('/src/components/img/1.avif')",
        dragimg: "url('/src/components/img/bg-upload.svg')",
        backg: "url('/src/components/img/respira.avif')",
        backsuga: "url('/src/components/img/bg.gif')",
        backmain: "url('/src/components/img/btsarmy.avif')",
        backhobi: "url('/src/components/img/bg (2).avif')",
        backhobi2: "url('/src/components/img/jhope2.gif')",
        gifhobi: "url('/src/components/img/hobigif.gif')",
        btsgif1: "url('/src/components/img/btsgif.gif')",
        btsgif2: "url('/src/components/img/btsgif2.gif')",
        btsgif3: "url('/src/components/img/btsgit3.gif')",
        rmlogo: "url('/src/components/img/rm.png')",
        jinlogo: "url('/src/components/img/jin.png')",
        sugalogo: "url('/src/components/img/suga.svg')",
        hobilogo: "url('/src/components/img/hope.webp')",
        jiminlogo: "url('/src/components/img/jimin.webp')",
        vlogo: "url('/src/components/img/v.png')",
        jklogo: "url('/src/components/img/jk.png')",
      }),
      fontFamily: {
        semiboldsans: ["Recursive", "sans-serif"],
        pinyon: ["Pinyon Script", "cursive"],
        monsieur: ["Monsieur La Doulaise", "cursive"],
        passions: ["Passions Conflict", "cursive"],
        guwndolyn: ["Gwendolyn", "cursive"],
        ballet: ["Ballet", "cursive"],
        monotono: ["Monoton", "sans-serif"],
        raleway: ['Raleway', "sans-serif"],
        "pixel": ["Pixelify Sans", "sans-serif"],
        "glich": ["Rubik Glitch", "sans-serif"],
        "pixel2": ["Press Start 2P", "sans-serif"],
        "dmmono": ["DM Mono", "sans-serif"],
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