import useDownload from "../../../hooks/useDownload";
import useFish from "../../../hooks/useFishing";
import card from "../assets/certificado.webp";

export const CardModalAccess = () => {
  const { handleDownloadImage } = useDownload();
  const {
    isWinner,
    wordToGuess,
    wordData,
    correctLetters,
    incorrectGuesses,
    show,
    closeModal,
  } = useFish();

  return (
    <>
      {show && (
        <>
          <div className="flex justify-center items-center fixed inset-10 z-40">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="  shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div id="print" className="relative">
                  <img src={card} alt="Certificate" className="w-full" />

                  <div className="absolute inset-0 py-4  ">
                    <h1 className="curved-text flex justify-center items-center text-5xl font-extrabold">
                      Fishing Certificate
                    </h1>

                    <div className="flex flex-col items-center justify-center text-center pt-2 gap-2 px-24">
                      <div className="text-lg">
                        This certificate is {isWinner ? "extended" : "invalid"}{" "}
                        to
                      </div>
                      <div className="text-lg ">name</div>
                      <div className="text-lg ">
                        For {isWinner ? "" : "not"} fishing the song{" "}
                        <span className="text-lg capitalize font-bold">
                          {wordToGuess}
                        </span>{" "}
                        with{" "}
                        <span className="text-lg font-bold">
                          {correctLetters.length} correct tries{" "}
                        </span>
                        and{" "}
                        <span className="text-lg font-bold">
                          {" "}
                          {incorrectGuesses.length}
                        </span>{" "}
                        incorrect tries
                      </div>

                      {wordData.image && (
                        <img
                          src={wordData.image}
                          alt="Word"
                          className="w-20 h-20 mt-4 rounded-xl"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 rounded-b">
                  <button
                    onClick={handleDownloadImage}
                    className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded"
                  >
                    Download
                  </button>
                  <button
                    onClick={closeModal}
                    className="ml-4 bg-blue-800 hover:bg-red-900 text-white p-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-14 z-30 bg-black rounded-3xl max-sm:inset-10"></div>
        </>
      )}
    </>
  );
};
