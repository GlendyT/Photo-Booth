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
      <div className="relative min-h-screen flex flex-col items-center gap-4 text-xl justify-center max-sm:px-10 bg-backpolaroid bg-cover bg-no-repeat max-sm:bg-center pt-16">
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
          className=" flex flex-row items-center justify-center gap-2 py-4 px-3 bg-white text-black font-bold rounded-2xl"
          onClick={handleDownloadImage}
          
        >
          
          Download
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 float-end"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
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
