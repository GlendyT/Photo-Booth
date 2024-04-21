import React from "react";

const Photo2 = ({
  image,
  inputRef,
  selectImage,
  addImage,
  changeColor
}) => {
  const handleColor = () => {
    selectImage();
  };
  const handleDragOver3 = (e) => {
    e.preventDefault();
  };
  const handleDragLeave3 = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center ">
      {image ? (
        <img
          src={image}
          alt=""
          className=" px-2 pb-2 max-sm:pb-0 max-sm:px-1 w-64 max-sm:w-40"
        />
      ) : (
        <div
          className={`  bg-white ${
            changeColor === true
              ? " border-transparent bg-none"
              : "w-40 h-40 max-sm:w-36 max-sm:h-36 border-4 border-purple-500"
          } `}
          onClick={handleColor}
          onDrop={addImage}
          onDragOver={handleDragOver3}
          onDragLeave={handleDragLeave3}
        >
          <h1
            className={`text-center ${
              changeColor === true
                ? " text-transparent max-sm:text-xs max-sm:truncate"
                : "text-black max-sm:text-xs max-lg:text-sm max-xl:text-sm max-2xl:text-sm"
            }`}
          >
            Click or Tap to Add Your Photo
          </h1>
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={addImage}
        style={{ display: "none" }}
        accept="image/*"
      />
    </div>
  );
};

export default Photo2;
