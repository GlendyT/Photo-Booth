import React from "react";
import { SCREEN } from "./Data";

const Card = () => {
  const randomIndex = Math.floor(Math.random() * SCREEN.length);
  const randomItem = SCREEN[randomIndex];

  return (
    <>
      <div className="flex flex-col items-center gap-4 text-xl px-40 pt-28">
        <div className="bg-white p-6 grid grid-row-2 justify-items-center">
          <img
            src={randomItem.img}
            alt=""
            className=" pb-2 w-72 flex justify-center"
          />
          <h1 className="text-sm">{randomItem.title}</h1>
          <h1 className="text-end text-black text-xs">- {randomItem.from}</h1>
        </div>
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
