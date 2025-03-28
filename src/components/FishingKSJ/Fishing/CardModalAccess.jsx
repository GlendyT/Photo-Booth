import useDownload from "../../../hooks/useDownload";
import useFish from "../../../hooks/useFishing";
import useRequestInfo from "../../../hooks/useRequestInfo";
import card from "../assets/certificado2.png";

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
          <div className="flex flex-col items-center justify-center text-center gap-5 px-10 text-sm max-md:text-xs pt-6 ">
            <div className="flex flex-col items-center justify-center gap-11 max-md:gap-4 pt-6 max-md:pt-2 max-md:mt-8">
              <p className="max-md:text-xs text-black ">{name}</p>

              {wordData.image && (
                <img
                  src={wordData.image}
                  alt="songbyjin"
                  className="w-10 h-10 rounded-xl max-md:w-8 max-md:h-8 max-md:mt-6  "
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center p-4 max-md:text-xs">
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
              ? "px-4 py-2 bg-black text-white rounded-xl hover:bg-slate-500 hover:text-black transition-all uppercase max-md:text-xs"
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
