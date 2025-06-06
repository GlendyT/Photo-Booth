import usePhotobooth from "../../hooks/usePhotobooth";

const Photo1 = ({ handleFileChange, preview, backgroundImage }) => {
  const { changeColor } = usePhotobooth();
  return (
    <div className="flex flex-col items-center ">
      <label
        htmlFor="avatarInput"
        className={` ${preview ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        {preview ? (
          <img
            src={preview}
            height={192}
            width={192}
            className={`object-cover h-40 pb-2 max-sm:px-0  w-40 `}
            alt="photoboothbts2"
          />
        ) : (
          <div
            className={`  bg-white cursor-grab ${
              changeColor === true
                ? "  border-transparent bg-none"
                : "w-40 h-40 max-sm:w-40 max-sm:h-36 border-x-4 "
            } ${backgroundImage ? "border-dashed" : "border-purple-500"}`}
          >
            <h1
              className={`text-center ${
                changeColor === true
                  ? " text-transparent max-sm:text-xs max-sm:truncate"
                  : "text-purple-900 font-ballet max-sm:text-xs max-lg:text-sm max-xl:text-sm max-2xl:text-sm "
              }`}
            >
              {" "}
              Click to Add Your Photo
            </h1>
          </div>
        )}
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="avatarInput"
        accept="image/*"
      />
    </div>
  );
};

export default Photo1;
