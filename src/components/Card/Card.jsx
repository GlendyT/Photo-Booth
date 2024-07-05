import React from "react";
import { SCREEN } from "./Data";
import useDownload from "../../hooks/useDownload";
import beyondarmy from "../img/Only-graphic-darkpurple.png";

const Card = () => {
  const { handleDownloadImage } = useDownload();
  const randomIndex = Math.floor(Math.random() * SCREEN.length);
  const randomItem = SCREEN[randomIndex];

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center gap-4 text-xl px-40 pt-20 max-sm:px-10 bg-backpolaroid bg-cover bg-no-repeat">
        <div
          className="bg-white border-pink-300 border-4 p-6 grid grid-row-2 justify-items-center"
          id="print"
        >
          <img
            src={randomItem.img}
            alt=""
            className="w-72 flex justify-center border-pink-300 border-4  "
          />
          <div className="pt-4 flex flex-row-2 justify-between w-full items-center text-pink-300">
            <img src={beyondarmy} alt="" className="w-14 h-14 pl-2" />
            <div className="text-lg max-sm:text-sm">
              <p className="  font-jinora italic">
                Special thanks to{" "}
                <p className="font-libre font-bold italic ">
                  {randomItem.title}{" "},
                </p>{" "}
                <p className="font-extrabold">ARMY</p>
              </p>
              <p className="text-end font-antonio font-bold">
                - {randomItem.from}
              </p>
            </div>
          </div>
        </div>
        <button
          className="py-4 px-3 bg-white text-black font-bold rounded-2xl"
          onClick={handleDownloadImage}
        >
          Download
        </button>
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
