import { useState } from "react";
import Header from "../Titulo/Header";
import List from "../ListadoDiseños/List";


const FormularioSuga = ({ setDescripcion, setRemitente, setDiseño }) => {
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("");
  const [design, setDesign] = useState("");
  const [error, setError] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [charCountFrom, setCharCountFrom] = useState(0);
  const maxCharLimit = 281;
  const maxFromLimit = 31;

  const handleTextArea = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharLimit) {
      setDescription(inputValue);
      setCharCount(inputValue.length);
    }
  };
  const handleFrom = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxFromLimit) {
      setFrom(inputValue);
      setCharCountFrom(inputValue.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((description === "", from === "" || design === "")) {
      setError(true);
      return;
    }
    setError(false);

    setDescripcion([description]);
    setRemitente([from]);
    setDiseño([design]);
  };

  const isMaxCharLimitReached = charCount === maxCharLimit;
  const isMaxFromLimitReached = charCountFrom === maxFromLimit;

  return (
    <div className=" flex flex-col sm:justify-center items-center text-white max-sm:text-xs">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative w-full px-10 py-4  max-sm:px-10 max-sm:py-10">
          <Header />
          <form className="mt-5 font-dmmono" onSubmit={handleSubmit}>
            <div className="my-5">
              <label
                className="flex float-start text-sm mb-2"
                htmlFor="descripcion"
              >
                Your Lyrics
              </label>
              <div className={`text-sm mb-2 float-end ${isMaxCharLimitReached ? 'text-red-500' : 'text-black'}`}>
                 {isMaxCharLimitReached && <span className="text-red-500">Too long!</span>} {charCount}/280
              </div>
              <textarea
                maxLength={maxCharLimit}
                placeholder="Write something"
                rows={5}
                id="descripcion"
                name="descripcion"
                value={description}
                onChange={handleTextArea}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                  isMaxCharLimitReached
                    ? "border-red-500 text-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>

            <div className="my-5 ">
              <label className="flex float-start text-sm mb-2 text-white">
                From
              </label>
              <div
                className={`text-sm mb-2 float-end ${
                  isMaxFromLimitReached ? "text-red-500" : "text-black"
                }`}
              >
                {isMaxFromLimitReached && <span className="text-red-500">Too long!</span>} {charCountFrom}/30 
              </div>
              <input
                maxLength={maxFromLimit}
                placeholder="Your Name"
                id="remitente"
                name="remitente"
                type="text"
                value={from}
                onChange={handleFrom}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                  isMaxFromLimitReached
                    ? "border-red-500 text-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>
            <List setDesign={setDesign} />

            <button
              disabled={!design}
              id="btn"
              type="submit"
              className="w-full bg-black text-white cursor-pointer p-3 font-pixel uppercase disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors"
            >
              Create post
            </button>
          </form>
        </div>
        {error && (
          <p className="text-red-700 text-center font-bold uppercase font-dmmono pt-1">
            All questions must be filled out
          </p>
        )}
      </div>
    </div>
  );
};

export default FormularioSuga;
