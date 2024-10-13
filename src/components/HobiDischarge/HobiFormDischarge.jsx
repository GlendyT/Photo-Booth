import { useState } from "react";
import { CardSelector } from "./CardSelector";
import { CARDDESKTOP, CARDPHONE } from "./Data";

export const HobiFormDischarge = ({
  setCountry,
  setName,
  setDiseño,
  setSelectedImage,
  isMobile,
}) => {
  const [pais, setPais] = useState("");
  const [design, setDesign] = useState("");
  const [from, setFrom] = useState("");
  const [error, setError] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [charCountFrom, setCharCountFrom] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const maxCharLimit = 21;
  const maxFromLimit = 16;

  const handleTextArea = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharLimit) {
      setPais(inputValue);
      setCharCount(inputValue.length);
    }
  };

  const isMaxCharLimitReached = charCount === maxCharLimit;
  const isMaxFromLimitReached = charCountFrom === maxFromLimit;

  const handleFrom = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxFromLimit) {
      setFrom(inputValue);
      setCharCountFrom(inputValue.length);
      setDesign(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((pais === "", from === "", design === "")) {
      setError(true);
      return;
    }
    setError(false);
    setCountry([pais]);
    setName([from]);
    setDiseño([design]);
    setSelectedImage(selectedPhoto);
  };

  return (
    <div className="flex flex-col sm:justify-center items-center text-white max-sm:text-xs">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative w-full px-10 py-4  max-sm:px-10 max-sm:py-10 backdrop-blur-sm bg-black/20 rounded-3xl">
          <form className="mt-5 font-providence   " onSubmit={handleSubmit}>
            <div
              className={`text-sm float-end ${
                isMaxFromLimitReached ? "text-red-500" : "text-black"
              }`}
            >
              {isMaxFromLimitReached && (
                <span className="text-red-500">Too long!</span>
              )}{" "}
              {charCountFrom}/15
            </div>
            <input
              maxLength={maxFromLimit}
              placeholder="Your Name"
              id="from"
              name="remitente"
              type="text"
              value={from}
              onChange={handleFrom}
              className={`appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                isMaxFromLimitReached
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
            />
            <div
              className={`text-sm float-end ${
                isMaxCharLimitReached ? "text-red-500" : "text-black"
              }`}
            >
              {isMaxCharLimitReached && (
                <span className="text-red-500">Too long!</span>
              )}{" "}
              {charCount}/20
            </div>
            <input
              maxLength={maxCharLimit}
              placeholder="Write your country or city"
              id="pais"
              name="descripcion"
              value={pais}
              onChange={handleTextArea}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                isMaxCharLimitReached
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
            />
            <CardSelector
              selectedPhoto={selectedPhoto}
              ver1={isMobile ? CARDPHONE.ver1P : CARDDESKTOP.ver1D}
              ver2={isMobile ? CARDPHONE.ver2P : CARDDESKTOP.ver2D}
              setSelectedPhoto={setSelectedPhoto}
            />

            <button
              id="btn"
              type="submit"
              className="w-full bg-black text-white cursor-pointer p-3 font-providence uppercase disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors"
              disabled={!selectedPhoto}
            >
              Create post
            </button>
          </form>
        </div>
        {error && (
          <p className="text-red-700 text-center font-bold uppercase font-providence pt-1">
            All questions must be filled out
          </p>
        )}
        <div
          className={` ${
            selectedPhoto
              ? "relative w-full px-10 py-4 max-sm:px-2 max-sm:py-8 backdrop-blur-sm bg-black/20 rounded-3xl  my-2 text-center font-providence transition-transform delay-150 text-[rgb(112,128,144)] font-extrabold max-sm:backdrop-blur-3xl max-sm:bg-white/30 "
              : "hidden"
          } `}
        >
          Let's welcome Hobi with a special card
          <p className="text-xs text-black max-sm:text-xs ">
            This message will be shown in korean
          </p>
          "Welcome home, Jung Hoseok! We missed you and we are proud of you. Our
          sunshine is home. Wishing you all the best of luck. Sending you all of
          our love."
        </div>
      </div>
    </div>
  );
};
