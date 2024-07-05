import Photo from "../components/PhotoBoothStrips/DragImage/Photo";
import Photo1 from "../components/PhotoBoothStrips/DragImage/Photo1";
import Photo2 from "../components/PhotoBoothStrips/DragImage/Photo2";
import Button from "../components/PhotoBoothStrips/Button";
import Loader from "../components/Loader/Loader";
import { useRef, useState, useEffect } from "react";
import useDownload from "../hooks/useDownload";
import Logo from "../components/PhotoBoothStrips/DragImage/Logo";
import logo1 from "../../src/components/img/festa_logo.webp";

const PhotoBooth = () => {
  const { handleDownloadImage } = useDownload();
  const [polaroids, setPolaroids] = useState([]);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [imageSaved, setImageSaved] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [photo2Complete, setPhoto2Complete] = useState(false);

  const refInputFiles = [useRef(null), useRef(null), useRef(null)]; // Array of refs for each input
  const elementRef = useRef(null);
  const typeImages = ["image/png", "image/jpeg", "image/jpg"];

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
    if (imageSaved) {
      const timer = setTimeout(() => {
        setImageSaved(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [imageSaved]);

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

  return (
    <div className=" relative min-h-screen bg-backphoto bg-no-repeat bg-cover bg-center pt-2">
      <div className="flex flex-col items-center ">
        {error && (
          <div className="bg-red-700 text-white rounded-lg p-2">
            {messageError}
          </div>
        )}
        <div
          className={`pt-4 max-xl:mx-auto m-auto px-2  bg-purple-500 pb-4`}
          id="print"
        >
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
          <Logo logo1={logo1} />
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
    </div>
  );
};

export default PhotoBooth;
