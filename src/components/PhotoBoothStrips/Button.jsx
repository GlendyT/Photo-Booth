

const Button = ({ handleDownloadImage,resetPhotos,photo2Complete}) => {

  const handleDownload = () => {
    handleDownloadImage();
  };



  return (
    <div className="max-md:flex ">
      <button
        className="bg-black rounded-lg text-white font-bold p-2 mt-4 mr-2 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2 hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85% disabled:hover:bg-none"
        onClick={handleDownload}
        disabled={!photo2Complete}
      >
        Save Photobooth
      </button>

      <button
        className="bg-black rounded-lg text-white font-bold p-2 mt-4 ml-2 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2 hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85%  disabled:hover:bg-none"
        onClick={resetPhotos}
        disabled={!photo2Complete}   
      >
        Create Another One
      </button>
    </div>
  );
};

export default Button;

