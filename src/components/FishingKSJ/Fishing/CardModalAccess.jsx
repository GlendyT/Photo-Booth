import useDownload from "../../../hooks/useDownload";
import useFish from "../../../hooks/useFishing";
import useRequestInfo from "../../../hooks/useRequestInfo";
import card from "../assets/certificado.webp";

export const CardModalAccess = () => {
  const { handleDownloadImage } = useDownload();
  const { usuario } = useRequestInfo();
  const { name } = usuario;
  const {
    isWinner,
    wordToGuess,
    wordData,
    correctLetters,
    incorrectGuesses,
    show,
    handleStartOver,
    isLoser,
    setShow,
  } = useFish();
  const handleCloseandrestart = () => {
    handleStartOver();
    setShow(false);
  };

  return (
    <>
      {show && (
        <>
          <div className="flex justify-center items-center fixed inset-10 z-40">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="  shadow-lg relative flex flex-col w-full outline-none focus:outline-none uppercase">
                <div id="print" className="relative">
                  <img src={card} alt="Certificate" className="w-full" />

                  <div className="absolute inset-0 py-4  ">
                    <h1 className=" flex justify-center items-center text-2xl font-extrabold max-sm:text-xs">
                      Fishing Certificate
                    </h1>

                    <div className="flex flex-col items-center justify-center text-center pt-2 max-sm:pt-0 gap-5 max-sm:gap-1 px-24 max-sm:px-4 text-sm max-sm:text-xs">
                      <span className="">
                        This certificate is {isWinner ? "extended" : "invalid"}{" "}
                        to
                      </span>
                      <span className=" font-extrabold underline ">{name}</span>
                      <div className="">
                        For {isWinner ? "" : "not"} fishing the song{" "}
                        <span className="uppercase text-blue-950 font-bold">
                          {wordToGuess}
                        </span>{" "}
                        with{" "}
                        <span className="font-bold text-blue-950">
                          {correctLetters.length}{" "}
                        </span>
                        <span className="font-bold ">correct tries </span>
                        and{" "}
                        <span className=" font-bold text-blue-950">
                          {" "}
                          {incorrectGuesses.length}
                        </span>{" "}
                        incorrect tries
                      </div>

                      {wordData.image && (
                        <img
                          src={wordData.image}
                          alt="Word"
                          className="w-20 h-20 mt-4 rounded-xl max-sm:w-10 max-sm:h-10 max-sm:mt-1"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-center p-4 rounded-b ">
                  <button
                    onClick={handleDownloadImage}
                    className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded uppercase"
                  >
                    Download
                  </button>
                  <button
                    onClick={handleCloseandrestart}
                    className={` ${
                      isWinner || isLoser
                        ? "px-4 py-2 bg-black text-white rounded-xl hover:bg-slate-500 hover:text-black transition-all uppercase"
                        : ""
                    }`}
                  >
                    {isWinner || isLoser ? "Play again" : ""}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-80 fixed inset-14 z-30 bg-black rounded-3xl max-sm:inset-8 max-lg:inset-8"></div>
        </>
      )}
    </>
  );
};
