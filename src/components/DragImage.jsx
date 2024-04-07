import React, { useState } from "react";
import "./Dragimage.css"


const DragImage = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const [image, setImage] = useState(null)
  const [classDrag, setClassDrag] = useState('drag_image');


  return (
    <div className="flex flex-col items-center">
      <h2 className=" uppercase font-bold text-purple-900">
        Upload Your Image
      </h2>
      <div className="font-bold">File Should be in jpge, png</div>
      {error && <div>{messageError}</div>}

      <input type="file" name="file" className=""/>
      <div className={classDrag}>
        <img src={image} alt="" className="drag_image_prev"/>
        <span>Click or Drag your Image Here</span>
      </div>

      <button className="bg-purple-800 rounded-lg text-white font-bold p-2">
        {" "}
        Take the Picture
      </button>
    </div>
  );
};

export default DragImage;
