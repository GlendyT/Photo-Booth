import usePhotobooth from "../../hooks/usePhotobooth";

const Photo = ({ preview, handleFileChange, backgroundImage }) => {
  const { changeColor } = usePhotobooth();

  return (
    <div className="flex flex-col items-center  m-1">
      <label
        htmlFor="avatarInput"
        className={` ${preview ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        {preview ? (
          <img
            src={preview}
            height={192}
            width={192}
            className={`object-cover h-40 max-sm:px-0 w-40`}
            alt="photoboothbts"
          />
        ) : (
          <div
            className={` cursor-grab${
              changeColor === true
                ? " "
                : " w-40 h-40 max-sm:w-40 max-sm:h-36 min-md:w-20 border-4"
            } ${
              backgroundImage
                ? "border-dotted border-black bg-black/20 backdrop-blur-xl "
                : "border-purple-500 bg-white "
            }`}
          >
            <h1
              className={`text-center ${
                changeColor === true
                  ? " text-transparent max-sm:text-xs max-sm:truncate"
                  : " font-ballet max-sm:text-xs max-lg:text-sm max-xl:text-sm max-2xl:text-sm"
              } ${backgroundImage ? "text-purple-100" : "text-purple-950"}`}
            >
              Click to Add Your Photo
            </h1>
          </div>
        )}
      </label>
      <input
        type="file"
        className="hidden"
        id="avatarInput"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Photo;
