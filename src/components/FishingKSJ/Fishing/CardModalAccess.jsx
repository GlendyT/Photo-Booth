import useDownload from "../../../hooks/useDownload";
import useFish from "../../../hooks/useFishing";
import useRequestInfo from "../../../hooks/useRequestInfo";
import card from "../assets/certificado2.webp";

export const CardModalAccess = () => {
  const { handleDownloadImage } = useDownload();
  const { usuario } = useRequestInfo();
  const { name } = usuario;
  const {
    isWinner,
    wordData,
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
            <div className="w-auto my-6 mx-auto max-w-3xl max-sm:max-w-2xl">
              <div className="  shadow-lg flex flex-col w-full outline-none focus:outline-none uppercase">
                <div id="print" className="relative">
                  <img src={card} alt="Certificate" className="aspect-video" />

                  <div className="absolute inset-0 py-4 max-sm:py-1 ">
                    <div className="flex flex-col items-center justify-center text-center pt-44 max-sm:pt-16 max-sm:mt-2 gap-5 max-sm:gap-0 px-24 max-sm:px-4 text-sm max-sm:text-xs">
                      <div>
                        {name}
                      </div>


                      {wordData.image && (
                        <img
                          src={wordData.image}
                          alt="Word"
                          className="w-20 h-20 mt-14 rounded-xl max-sm:w-8 max-sm:h-8 max-sm:mt-6"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-center p-4 max-sm:text-xs">
                  <button
                    onClick={handleDownloadImage}
                    className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-xl uppercase"
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
