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
        nav: "url('/src/components/img/Glendy_Header5.webp')",
        bingoback: "url('/src/components/img/Background_BingoBA.webp')",
        gifhobi: "url('/src/components/img/hobigif.gif')",
        gifV: "url('/src/components/VPassport/imgVPassport/kimtaehyung.gif')",
        btsgif1: "url('/src/components/img/btsgif.gif')",
        btsgif2: "url('/src/components/img/btsgif2.gif')",
        btsgif3: "url('/src/components/img/btsgit3.gif')",
        magicdoors: "url('/src/components/img/magicshop.gif')",
        bingo2: "url('/src/components/img/BINGO AMRY tr.webp')",
        sugalogoi4: "url('/src/components/img/sugaverse (4).webp')",
        jhopelogoi: "url('/src/components/img/hobipalloza (1).webp')",
        jhopelogoi1: "url('/src/components/img/hopedischarge.webp')",
        bingologoi: "url('/src/components/img/bingo.webp')",
        polaroidlogo: "url('/src/components/img/polaroid.webp')",
        photostrips: "url('/src/components/img/photostrip.webp')",
        vlogo: "url('/src/components/img/vpassport.webp')",
        
        largeScreen: "url('/src/components/VPassport/imgVPassport/Background Page Starts.jpg')",
        largeScreen2: "url('/src/components/VPassport/imgVPassport/Background Page Generated.webp')",
        rightSidePassport:
          "url('/src/components/VPassport/imgVPassport/Passport Image Generated Right Side.webp')",
        smallScreen: "/src/components/VPassport/imgVPassport/Background Generated Phone.webp')",
        smallScreen2: "/src/components/VPassport/imgVPassport/Background Starts Phone.webp')",
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
        michroma: ["Michroma", "sans-serif"],
      },
      colors: {
        army: "rgb(0,74,173)",
        army2: "linear-gradient(90deg, rgba(0,74,173,1) 44%, rgba(203,108,230,1) 100%)",
        purpleButton: "rgb(93,40,95)",
        blueButton: "rgb(04,84,139)",
        greenButton: "rgb(32,95,30)",
      },
    },
  },
  plugins: [],
};


/*
background: rgb(0,74,173);
background: linear-gradient(90deg, rgba(0,74,173,1) 44%, rgba(203,108,230,1) 100%);*/