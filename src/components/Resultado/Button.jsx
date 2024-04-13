

const Button = ({ htmlToImageConvert,resetPhotos, changeColor}) => {

  const handleDownload = () => {

    htmlToImageConvert();
  };
  return (
    <div className="flex flex-row gap-2">
      <button
        className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-4  disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2"
        onClick={handleDownload}

      >
        Save Photobooth
      </button>

      <button
        className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-4  disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2"
        onClick={resetPhotos}

      >
        Create Another One
      </button>
    </div>
  );
};

export default Button;

