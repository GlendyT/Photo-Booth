import { toPng } from "html-to-image";
import Photo from "./DragImage/Photo";
import Photo1 from "./DragImage/Photo1";
import Photo2 from "./DragImage/Photo2";
import Button from "./Button";
import Loader from "../Loader/Loader";
import { useCallback, useRef, useState, useEffect } from "react";


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
  }, [polaroids[2]]);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, [error]);

  const htmlToImageConvert = useCallback(() => {
    if (!elementRef.current) return;
    setImageSaved(true);

    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "PhotoBooth";
        link.href = dataUrl;

        link.addEventListener("click", () => {
          setImageSaved(true);
        });

        link.click();
      })
      .catch((err) => {
        console.log(err);
        setImageSaved(false);
      });
  }, [elementRef]);

  return (
    <div className="flex flex-col items-center ">
      <div className="bg-purple-500" ref={elementRef}>
        {error && (
          <div className="bg-red-700 text-white rounded-lg p-2">
            {messageError}
          </div>
        )}
        <div className="pt-4 max-xl:mx-auto m-auto px-2  bg-purple-500">
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
        htmlToImageConvert={htmlToImageConvert}
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

/*            <h2 className=" uppercase font-bold text-purple-500 text-2xl max-sm:text-xs ">
          Are you ready for THE FESTA?
        </h2>
        
                <h3 className="font-bold pb-4 uppercase max-sm:text-xs max-sm:pb-2 max-sm:justify-center text-purple-300">
          Image Should be in jpge or png
        </h3>*/
