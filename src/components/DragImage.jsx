import React, { useState, useRef, useEffect } from "react";
import "./Dragimage.css";

const DragImage = ({ setMedia, setLoading }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [image, setImage] = useState(null);
  const [classDrag, setClassDrag] = useState("drag_image");

  const typeImages = ["image/png", "image/jpeg", "image/jpg"];
  const refInputFile = useRef(null);

  const selectImage = (e) => {
    refInputFile.current.click();
  };

  const isImageValid = (file) => {
    if (file && typeImages.includes(file.type)) {
      setError(false);
      return true;
    } else {
      setError(true);
      setMessageError("File is incorrect");
      setImage("");
      return false;
    }
  };

  const showImage = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      setImage(e.target.result);
    });
    setFile(file);
    /*Guardamos el archivo para pasarlo a su padre*/
    setMedia(file);
  };
  const addImage = (e) => {
    e.preventDefault();

    refInputFile.current.files = e.dataTransfer.files;
    const file = refInputFile.current.files[0];

    showImage(file);
  };

  const uploadImage = (e) => {
    const files = e.target.files;
    const file = files[0];

    const valid = isImageValid(file);

    if (valid) {
      showImage(file);
    } else {
      setFile(null);
    }
  };

  const handleSave = () => {
    const valid = isImageValid(file);
    if (valid && file) {
      setLoading(true);
    } else {
      setError(true);
      setMessageError("Upload a correct image");
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setClassDrag("drag_image"); // Restaura la clase por defecto
  };
  

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

  return (
    <div className="flex flex-col items-center ">
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
        className={classDrag}
        onClick={selectImage}
        onDrop={addImage}
        onDragOver={(e) => {
          e.preventDefault();
          setClassDrag("drag_image");
        }}
        onDragLeave={handleDragLeave}
      >
        <img src={image} alt="" className="drag_image_prev" />
        <span className="text-black ">Click or Drag your Image Here</span>
      </div>

      <button
        className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-4"
        onClick={handleSave}
      >
        {" "}
        Take the Picture
      </button>
    </div>
  );
};

export default DragImage;
