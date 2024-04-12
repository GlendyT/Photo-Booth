import React, { useState, useRef, useEffect } from "react";
import "./Dragimage.css";
//import Loader from "../Loader/Loader";


const DragImage = () => {
  const [polaroid, setPolaroid] = useState([])
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [image, setImage] = useState(null);
  const [changeColor, setChangeColor] = useState(false)

  const typeImages = ["image/png", "image/jpeg", "image/jpg"];
  const refInputFile = useRef(null);

  const selectImage = (e) => {
    refInputFile.current.click();
    setChangeColor(!changeColor)
  };

  const isImageValid = (polaroid) => {
    if (polaroid && typeImages.includes(polaroid.type)) {
      setError(false);
      return true;
    } else {
      setError(true);
      setMessageError("File is incorrect");
      setImage("");
      return false;
    }
  };
  const showImage = (polaroid) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(polaroid);

    fileReader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
    setPolaroid(polaroid);
  };
  const addImage = (e) => {
    e.preventDefault();

    refInputFile.current.files = e.dataTransfer.files;
    const polaroid = refInputFile.current.files[0];

    showImage(polaroid);
  };
  const uploadImage = (e) => {
    const files = e.target.files;
    const polaroid = files[0];

    const valid = isImageValid(polaroid);

    if (valid) {
      showImage(polaroid);
    } else {
      setPolaroid(null);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();

// Restaura la clase por defecto
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setChangeColor(!changeColor)

  };
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

  return (
    <div className="flex flex-col items-center">

      {error && <div className="bg-red-700 text-white rounded-lg p-2">{messageError}</div>}

      <input
        type="file"
        name="file"
        ref={refInputFile}
        onChange={uploadImage}
      />

      <div
        className={` bg-dragimg bg-no-repeat bg-contain  ${(changeColor === true) ? " w-64  max-sm:w-40 border-transparent bg-none" : "w-64 h-56 max-sm:w-32 max-sm:h-32 border-dashed border-4 border-gray-600"} `}
        onClick={selectImage}
        onDrop={addImage}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        
      >
        <img src={image} alt="" className="bg-white px-4 pb-10 max-sm:pb-0 max-sm:px-1" />
        <h1
          className={`text-center ${
            changeColor === true ? " text-transparent max-sm:text-xs max-sm:truncate"  : "text-black "
          }`}
        >Click or Drag your Image Here</h1>
      </div>

    </div>
  );
};

export default DragImage;
