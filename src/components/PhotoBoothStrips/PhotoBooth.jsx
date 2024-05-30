//import { toPng } from "html-to-image";
import html2canvas from "html2canvas";
import Photo from "./DragImage/Photo";
import Photo1 from "./DragImage/Photo1";
import Photo2 from "./DragImage/Photo2";
import Button from "./Button";
import Loader from "../Loader/Loader";
import { useRef, useState, useEffect } from "react";


const PhotoBooth = () => {
  const [polaroids, setPolaroids] = useState([]);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [imageSaved, setImageSaved] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [photo2Complete, setPhoto2Complete] = useState(false);

  const refInputFiles = [useRef(null), useRef(null), useRef(null)]; // Array of refs for each input
  const elementRef = useRef(null);
  const typeImages = ["image/png", "image/jpeg", "image/jpg"];

  useEffect(() => {
    if (imageSaved) {
      const timer = setTimeout(() => {
        setImageSaved(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [imageSaved]);

  const selectImage = (index) => {
    refInputFiles[index].current.click();
  };
  const isImageValid = (polaroid) => {
    if (polaroid && typeImages.includes(polaroid.type)) {
      setError(false);
      return true;
    } else {
      setError(true);
      setMessageError("File is incorrect");
      return false;
    }
  };
  const showImage = (index, polaroid) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(polaroid);

    fileReader.addEventListener("load", (e) => {
      setPolaroids((prevPolaroids) => {
        const updatedPolaroids = [...prevPolaroids];
        updatedPolaroids[index] = e.target.result;
        return updatedPolaroids;
      });
    });
  };
  const addImage = (index, e) => {
    e.preventDefault();

    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;

    Array.from(files).forEach((file) => {
      if (isImageValid(file)) {
        showImage(index, file);
      }
    });
  };
  const resetPhotos = () => {
    setPolaroids([]);
    setChangeColor(false);
    setError(false);
    setImageSaved(false);
  };

  useEffect(() => {
    if (polaroids[2] || polaroids[1] || polaroids[0]) {
      setPhoto2Complete(true);
    } else {
      setPhoto2Complete(false);
    }
  }, [polaroids]);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, [error]);


  const handleDownloadImage = async () => {
    const element = document.getElementById("print");
    if (!element) return;

    // Increase resolution by setting the scale option
    const options = {
      scale: 8, // You can adjust this value to increase or decrease resolution
    };

    const canvas = await html2canvas(element, options);
    const data = canvas.toDataURL("image/jpeg"); // Changed from 'image/jpg' to 'image/jpeg'
    const link = document.createElement("a");

    setImageSaved(true);

    link.href = data;
    link.download = "PhotoBooth.jpg";

    document.body.appendChild(link);
    link.click();

    setImageSaved(false);
    document.body.removeChild(link);
    setImageSaved(true);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="" id="print">
        {error && (
          <div className="bg-red-700 text-white rounded-lg p-2">
            {messageError}
          </div>
        )}
        <div className="pt-4 max-xl:mx-auto m-auto px-2 bg-white">
          
          <Photo
            polaroids={polaroids}
            setPolaroids={setPolaroids}
            image={polaroids[0]}
            inputRef={refInputFiles[0]}
            selectImage={() => selectImage(0)}
            elementRef={elementRef}
            addImage={(e) => addImage(0, e)}
            changeColor={changeColor}
            setError={setError}
            error={error}
            messageError={messageError}
          />
          <Photo1
            image={polaroids[1]}
            inputRef={refInputFiles[1]}
            selectImage={() => selectImage(1)}
            elementRef={elementRef}
            addImage={(e) => addImage(1, e)}
            changeColor={setChangeColor}
            setError={setError}
            error={error}
            messageError={messageError}
          />
          <Photo2
            image={polaroids[2]}
            inputRef={refInputFiles[2]}
            selectImage={() => selectImage(2)}
            elementRef={elementRef}
            addImage={(e) => addImage(2, e)}
            changeColor={setChangeColor}
            setError={setError}
            error={error}
            messageError={messageError}
          />
        </div>
      </div>

      <Button
        handleDownloadImage={handleDownloadImage}
        resetPhotos={resetPhotos}
        photo2Complete={photo2Complete}
      />
      {imageSaved && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default PhotoBooth;
