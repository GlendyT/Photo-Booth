const Button = ({ handleDownloadImage, resetPhotos, photo2Complete }) => {
  const handleDownload = () => {
    handleDownloadImage();
  };

  return (
    <div className="flex max-sm:flex max-sm:flex-col gap-1 max-sm:justify-center">
      <button
        className="bg-black rounded-lg text-white font-bold p-2 mt-4 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2 hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85% disabled:hover:bg-none"
        onClick={handleDownload}
        disabled={!photo2Complete}
      >
        Save
      </button>

      <button
        className="bg-black rounded-lg text-white font-bold p-2 mt-4 disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors max-sm:text-xs max-sm:mt-2 hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85%  disabled:hover:bg-none"
        onClick={resetPhotos}
        disabled={!photo2Complete}
      >
        Create Other
      </button>
      <button className="bg-slate-700 rounded-lg text-white font-bold mt-4 max-sm:mt-2 ">
        <a href="https://ko-fi.com/P5P1YQ11J" target="_blank" rel="noreferrer">
          <img
            src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
            alt="Support Me"
            className="w-28"
          />
        </a>
      </button>
    </div>
  );
};

export default Button;
