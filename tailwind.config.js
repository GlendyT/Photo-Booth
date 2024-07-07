/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dragimg1: "url('/src/components/img/1.avif')",
        dragimg: "url('/src/components/img/bg-upload.svg')",
        backg: "url('/src/components/img/respira.avif')",
        backsuga: "url('/src/components/img/bg.gif')",
        backmain: "url('/src/components/img/BackgroundHOME_VercelBA2.webp')",
        backpolaroid: "url('/src/components/img/Background_PolaroidBA.webp')",
        backhobi: "url('/src/components/img/bg (2).avif')",
        backhobi2: "url('/src/components/img/jhope2.gif')",
        backphoto: "url('/src/components/img/photobooth_bg.avif')",
        logo: "url('/src/components/img/festa_logo.webp')",
        nav: "url('/src/components/img/BackgroundHOME_VercelBA4.avif')",
        gifhobi: "url('/src/components/img/hobigif.gif')",
        btsgif1: "url('/src/components/img/btsgif.gif')",
        btsgif2: "url('/src/components/img/btsgif2.gif')",
        btsgif3: "url('/src/components/img/btsgit3.gif')",
        magicdoors: "url('/src/components/img/magicshop.gif')",
        bingo: "url('/src/components/img/bingo.gif')",
        bingo2: "url('/src/components/img/BINGO AMRY tr.webp')",
        rmlogo: "url('/src/components/img/rm.png')",
        jinlogo: "url('/src/components/img/jin.png')",
        sugalogo: "url('/src/components/img/suga.svg')",
        hobilogo: "url('/src/components/img/hope.webp')",
        jiminlogo: "url('/src/components/img/jimin.webp')",
        vlogo: "url('/src/components/img/v.png')",
        jklogo: "url('/src/components/img/jk.png')",
      },
      fontFamily: {
        semiboldsans: ["Recursive", "sans-serif"],
        monotono: ["Monoton", "sans-serif"],
        pixel: ["Pixelify Sans", "sans-serif"],
        glich: ["Rubik Glitch", "sans-serif"],
        pixel2: ["Press Start 2P", "sans-serif"],
        dmmono: ["DM Mono", "sans-serif"],
        rock: ["Rock Salt", "cursive"],
        playwrite: ["Playwrite IT Moderna", "cursive"],
        pacific: ["Pacifico", "cursive"],
        indie: ["Indie Flower", "cursive"],
        bad: ["Bad Script", "cursive"],
        antonio: ["Antonio", "sans-serif"],
        jinora: ["Nokora", "sans-serif"],
        libre: ["Libre Caslon Text", "serif"],
      },
      colors: {
        army: "rgb(0,74,173)",
        army2: "linear-gradient(90deg, rgba(0,74,173,1) 44%, rgba(203,108,230,1) 100%)"
      },
    },
  },
  plugins: [],
};


/*
background: rgb(0,74,173);
background: linear-gradient(90deg, rgba(0,74,173,1) 44%, rgba(203,108,230,1) 100%);*/