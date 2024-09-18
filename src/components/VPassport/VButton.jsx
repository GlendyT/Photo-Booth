import { useState } from "react";

export const VButton = ({ handleDownloadImage, handleRestart }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleDownload = () => {
    setButtonDisabled(true);
    handleDownloadImage();
  };

  return (
    <>
      <button
        type="button"
        className="py-2 px-10 bg-black hover:bg-greenButton hover:text-black text-white font-bold uppercase rounded-lg"
        onClick={handleRestart}
      >
        Restart
      </button>
      <button
        type="button"
        className={`py-2 px-10 bg-black hover:bg-blueButton hover:text-black text-white font-bold uppercase rounded-lg disabled:bg-blueButton disabled:text-black disabled:cursor-not-allowed`}
        onClick={() => handleDownload()}
        disabled={buttonDisabled}
      >
        {buttonDisabled ? "Downloaded" : "Share"}
      </button>
    </>
  );
};