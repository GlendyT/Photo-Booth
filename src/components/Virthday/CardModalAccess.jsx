import useDownload from "../../hooks/useDownload";
import useFlip from "../../hooks/useFlip";
import useRequestInfo from "../../hooks/useRequestInfo";
import card from "./assets/VirthdayCard.webp";

export const CardModalAccess = () => {
  const { handleDownloadImage } = useDownload();
  const { usuario } = useRequestInfo();
  const { name } = usuario;
  const { handleRestart } = useFlip();

  return (
    <>
      <div className="flex justify-center items-center fixed inset-10 z-40">
        <div className="w-auto my-2 mx-auto max-w-3xl max-sm:max-w-2xl">
          <div className="shadow-lg flex flex-col w-full outline-none focus:outline-none uppercase">
            <div id="print" className="relative border-purpleButton border-4 ">
              <img src={card} alt="Certificate" className="w-auto h-96" />
              <div className="absolute inset-0 flex flex-col justify-end items-center pb-40 pr-36">
                <div className=" w-full flex flex-col items-center px-4 py-2 rounded-md text-black font-extrabold font-virthday text-base max-sm:text-xs">
                  From <span className="text-base">{name}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center p-4 max-sm:text-xs font-virthday font-extrabold text-lg">
              <button
                onClick={handleDownloadImage}
                className="bg-green-950 hover:bg-green-900 text-white p-2 rounded-xl transition-all uppercase"
              >
                Download
              </button>
              <button
                onClick={handleRestart}
                className="bg-blue-950 p-2 text-white rounded-xl hover:bg-blue-900 hover:text-gray-200 transition-all uppercase"
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-100 fixed inset-14 z-30 bg-black rounded-3xl max-sm:inset-8 max-lg:inset-8"></div>
    </>
  );
};
