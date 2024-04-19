import React from "react";
import { SCREEN } from "./Data";

const Card = () => {
  const randomIndex = Math.floor(Math.random() * SCREEN.length);
  const randomItem = SCREEN[randomIndex];

  return (
    <>
      <div className="flex flex-col items-center gap-4 text-xl px-36 py-10">
        <h1 className="text-purple-900 font-extrabold">
          FESTA is here, join us for streaming parties and fun activities
        </h1>
        <h2 className="font-extrabold text-purple-950">BTS ANNIVERSARY</h2>

        <div className="bg-purple-600 p-10 flex flex-col">
          <img src={randomItem.img} alt="" className="p-2 items-center" />
          <div className="bg-white px-2 py-4 text-purple-900">
            <h1 className="font-semiboldsans italic">{randomItem.title}</h1>
            <h1 className="text-end font-semiboldsans text-black">
              - {randomItem.from}
            </h1>
          </div>
        </div>
        <h2 className="font-bold text-black text-xs">Click the Button </h2>
        <button className="bg-violet-900 text-white p-4 rounded-lg">
          Playlists
        </button>
      </div>
    </>
  );
};

export default Card;
