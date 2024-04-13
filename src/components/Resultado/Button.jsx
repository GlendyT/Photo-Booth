

const Button = ({ htmlToImageConvert,resetPhotos}) => {

  const handleDownload = () => {
    htmlToImageConvert();
  };
  return (
    <div className="max-md:flex ">
      <button
        className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-4 mr-2 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2"
        onClick={handleDownload}
      >
        Save Photobooth
      </button>

      <button
        className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-4 ml-2 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2"
        onClick={resetPhotos}

      >
        Create Another One
      </button>
    </div>
  );
};

export default Button;

