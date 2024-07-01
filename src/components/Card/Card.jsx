import React from "react";
import { SCREEN } from "./Data";
import useDownload from "../../hooks/useDownload";

const Card = () => {
  const {handleDownloadImage} = useDownload()
  const randomIndex = Math.floor(Math.random() * SCREEN.length);
  const randomItem = SCREEN[randomIndex];

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center gap-4 text-xl px-40 pt-20 max-sm:px-10 bg-backmain bg-cover bg-no-repeat" >
        <div className="bg-white p-6 grid grid-row-2 justify-items-center" id="print">
          <img
            src={randomItem.img}
            alt=""
            className=" pb-2 w-72 flex justify-center"
          />
          <div className="pt-0 italic font-ballet"> 
          <h1 className="text-sm max-sm:text-xs">{randomItem.title}</h1>
          <h1 className="text-end text-black text-xs">- {randomItem.from}</h1>
          </div>
        </div>
        <button
        className="py-4 px-3 bg-white text-black font-bold rounded-2xl"
         onClick={handleDownloadImage}
        >Download</button>
      </div>
    </>
  );
};

export default Card;

/* 
        <h1 className="text-purple-900 font-extrabold text-center">
          FESTA is here, join us for streaming parties and fun activities
        </h1>
        <h2 className="font-extrabold text-purple-950">BTS ANNIVERSARY</h2>
               <h2 className="font-bold text-black text-xs">Click the Button </h2>
        <button className="bg-violet-900 text-white p-4 rounded-lg">
          Playlists
        </button>*/
