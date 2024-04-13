import React from "react";

const Photo = ({ image, inputRef, selectImage, addImage, changeColor }) => {
  return (
    <div className="flex flex-col items-center ">
      {image ? (
        <img
          src={image}
          alt=""
          className="bg-white px-4 pb-0 max-sm:pb-0 max-sm:px-1"
        />
      ) : (
        <div
          className={` bg-dragimg bg-no-repeat bg-contain  ${
            changeColor === true
              ? " w-64  max-sm:w-40 border-transparent bg-none"
              : " w-40 h-40 max-sm:w-36 max-sm:h-36 min-md:w-20 border-dashed border-4 border-gray-600"
          } `}
          onClick={selectImage}
        >
          <h1
            className={`text-center ${
              changeColor === true
                ? " text-transparent max-sm:text-xs max-sm:truncate"
                : "text-black max-sm:text-xs max-lg:text-sm max-xl:text-sm max-2xl:text-sm"
            }`}
          >
            Click to Add Your Photo
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

export default Photo;
