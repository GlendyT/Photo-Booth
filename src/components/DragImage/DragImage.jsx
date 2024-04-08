import React, { useState, useRef, useEffect } from "react";
//import background from "../components/img/bg-upload.svg"
import "./Dragimage.css";


const DragImage = () => {
  //const [file, setFile] = useState(null);
  const [polaroid, setPolaroid] = useState([])
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [image, setImage] = useState(null);
  const [changeColor, setChangeColor] = useState(false)

  const typeImages = ["image/png", "image/jpeg", "image/jpg"];
  const refInputFile = useRef(null);

  const selectImage = (e) => {
    refInputFile.current.click();
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

  const handleSave = () => {
    const valid = isImageValid(polaroid);
    if (valid && polaroid) {
    } else {
      setError(true);
      setMessageError("Upload a correct image");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setChangeColor(!changeColor)
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
    <div className="flex flex-col items-center  p-4 ">
      <h2 className=" uppercase font-bold text-purple-900 text-2xl">
        Upload Your Image
      </h2>
      <div className="font-bold">File Should be in jpge or png</div>
      {error && <div>{messageError}</div>}

      <input
        type="file"
        name="file"
        ref={refInputFile}
        onChange={uploadImage}
      />

      <div
        className={` w-48 bg-dragimg bg-no-repeat bg-contain  ${(changeColor === true) ? '' : 'border-transparent'}`}
        onClick={selectImage}
        onDrop={addImage}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <img src={image} alt="" className="bg-white px-4 pt-4 pb-10" />
        <h1 className="text-black text-center">Click or Drag your Image Here</h1>
      </div>

      <button
        className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-12 disabled:opacity-10"
        onClick={handleSave}
      >
        Take the Picture
      </button>
    </div>
  );
};

export default DragImage;
