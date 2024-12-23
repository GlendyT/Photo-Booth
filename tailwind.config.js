/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        //TODO: GIFS PARA INICIO
        gifhobi: "url('/src/components/img/hobigif.gif')",
        gifV: "url('/src/components/VPassport/imgVPassport/kimtaehyung.gif')",
        hopegif: "url('/src/components/HobiDischarge/assets/hopeisback.gif')",
        btsgif1: "url('/src/components/img/btsgif.gif')",
        btsgif2: "url('/src/components/img/btsgif2.gif')",
        btsgif3: "url('/src/components/img/btsgit3.gif')",
        btsgif4: "url('/src/components/img/btsgif4.gif')",

        //TODO: LOGOS INICIO
        jhopelogoi: "url('/src/components/img/hobipalloza (1).webp')",
        jhopelogoi1: "url('/src/components/img/hopedischarge.webp')",
        bingologoi: "url('/src/components/img/bingo.webp')",
        polaroidlogo: "url('/src/components/img/polaroid.webp')",
        photostrips: "url('/src/components/img/photostrip.webp')",
        vlogo: "url('/src/components/img/vpassport.webp')",
        jinlogo: "url('/src/components/img/jinlogo.webp')",

        //TODO: HOBIPALOOZA
        backhobi2:
          "url('/src/components/hobipalloza/assetsPalooza/jhope2.gif')",
        backhobi:
          "url('/src/components/hobipalloza/assetsPalooza/bg (2).avif')",

        //TODO: SUGAVERSE
        sugalogoi4:
          "url('/src/components/sugaverse/assetsSuga/sugaverse (4).webp')",
        backsuga: "url('/src/components/img/bg.gif')",

        //TODO: BINGO
        bingo2: "url('/src/components/Bingo/BINGO AMRY tr.webp')",
        bingoback: "url('/src/components/Bingo/Background_BingoBA.webp')",

        //TODO: RANDOM CARD
        backpolaroid:
          "url('/src/components/Card/assetsCard/Background_PolaroidBA.webp')",

        //TODO: PHOTOBOOTH
        backphoto:
          "url('/src/components/PhotoBoothStrips/assetsBooth/photobooth_bg.avif')",

        //TODO: BACKGROUND AND LOGOS
        dragimg: "url('/src/components/img/bg-upload.svg')",
        backmain: "url('/src/components/img/BackgroundHOME_VercelBA2.webp')",
        logo: "url('/src/components/img/festa_logo.webp')",
        nav: "url('/src/components/img/Glendy_Header5.webp')",

        //TODO:HOBIDISCHARGE
        bghobiDesktop1:
          "url('/src/components/HobiDischarge/assets/hobis_discharge_abb_bg_desktop.webp')",
        bghobiDesktop2:
          "url('/src/components/HobiDischarge/assets/hobis_discharge_2_app_bg_desktop.webp')",
        bghobimobile1:
          "url('/src/components/HobiDischarge/assets/hobis_discharge_app_bg_mobile.webp')",
        bghobimobile2:
          "url('/src/components/HobiDischarge/assets/hobis_discharge_2_app_bg_mobile.webp')",

        //TODO: VPASSPORT
        largeScreen:
          "url('/src/components/VPassport/imgVPassport/Background Page Starts.jpg')",
        largeScreen2:
          "url('/src/components/VPassport/imgVPassport/Background Page Generated.webp')",
        rightSidePassport:
          "url('/src/components/VPassport/imgVPassport/Passport Image Generated Right Side.webp')",
        smallScreen:
          "/src/components/VPassport/imgVPassport/Background Generated Phone.webp')",
        smallScreen2:
          "/src/components/VPassport/imgVPassport/Background Starts Phone.webp')",
      },
      fontFamily: {
        semiboldsans: ["Recursive", "sans-serif"],
        pixel: ["Pixelify Sans", "sans-serif"],
        glich: ["Rubik Glitch", "sans-serif"],
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
        providence: ["Fuzzy Bubbles", "sans-serif"],
        ballet: ["Ballet", "cursive"],
        Rock: ["Rock Salt", "cursive"],
        Monoton: ["Monoton", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        PressGame: ['"Press Start 2P"', 'system-ui']
      },
      colors: {
        army: "rgb(0,74,173)",
        army2:
          "linear-gradient(90deg, rgba(0,74,173,1) 44%, rgba(203,108,230,1) 100%)",
        purpleButton: "rgb(93,40,95)",
        blueButton: "rgb(04,84,139)",
        greenButton: "rgb(32,95,30)",
      },
    },
  },
  plugins: [],
};
