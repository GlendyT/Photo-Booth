import React from "react";

const Photo = ({ image, inputRef, selectImage, addImage, changeColor }) => {
  const handleColor = () => {
    selectImage();
  };
  const handleImageClick = () => {
    selectImage(); // Llama a la función para cambiar la imagen
  };
  const handleDragOver1 = (e) => {
    e.preventDefault();
  };
  const handleDragLeave1 = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center ">
      {image ? (
        <img
          src={image}
          alt="photoboothbts4"
          className=" object-cover w-40 pb-2 max-sm:pb-2 max-sm:px-1 max-sm:w-40"
          onClick={handleImageClick}
        />
      ) : (
        <div
          className={` bg-white ${
            changeColor === true
              ? " border-transparent bg-none"
              : " w-40 h-40 max-sm:w-36 max-sm:h-36 min-md:w-20 border-4 border-purple-500"
          } `}
          onClick={handleColor}
          onDrop={addImage}
          onDragOver={handleDragOver1}
          onDragLeave={handleDragLeave1}
        >
          <h1
            className={`text-center ${
              changeColor === true
                ? " text-transparent max-sm:text-xs max-sm:truncate"
                : "text-black font-ballet max-sm:text-xs max-lg:text-sm max-xl:text-sm max-2xl:text-sm"
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
