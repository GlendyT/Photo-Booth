import useDownload from "../../../hooks/useDownload";
import useFish from "../../../hooks/useFishing";
import useRequestInfo from "../../../hooks/useRequestInfo";
import card from "../assets/certificado2.webp";

export const CardModalAccess = () => {
  const { handleDownloadImage } = useDownload();
  const { usuario } = useRequestInfo();
  const { name } = usuario;
  const { isWinner, wordData, handleStartOver, isLoser, setShow } = useFish();
  const handleCloseandrestart = () => {
    handleStartOver();
    setShow(false);
  };

  return (
    <div className="flex justify-center items-center inset-10 z-40 ">
      <div className="w-auto my-2 mx-auto max-w-3xl"> 
      <div id="print" className="relative">
        <img src={card} alt="fishingwithjin" className=" object-contain" />

        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center text-center gap-5 px-10 text-sm max-sm:text-xs pt-16 max-sm:pt-0">
            <div className="flex flex-col items-center justify-center gap-16 max-sm:gap-1 pt-2 max-sm:pt-2 max-sm:mt-8">
              <p className="max-sm:text-xs ">{name}</p>

              {wordData.image && (
                <img
                  src={wordData.image}
                  alt="songbyjin"
                  className="w-12 h-12 rounded-xl max-sm:w-8 max-sm:h-8 max-sm:mt-6"
                />
              )}
            </div>
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
              ? "px-4 py-2 bg-black text-white rounded-xl hover:bg-slate-500 hover:text-black transition-all uppercase max-sm:text-xs"
              : ""
          }`}
        >
          {isWinner || isLoser ? "Play again" : ""}
        </button>
      </div>
      </div>
    </div>
  );
};
