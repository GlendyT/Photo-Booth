import { toPng } from "html-to-image";
import Photo from "../DragImage/Photo";
import Photo1 from "../DragImage/Photo1";
import Photo2 from "../DragImage/Photo2";
import Button from "./Button";
import Loader from "../Loader/Loader";
import { useCallback, useRef, useState, useEffect } from "react";

const Resultado = () => {
  const [polaroids, setPolaroids] = useState([]);
  const [error, setError] = useState(false);
  const [setMessageError] = useState("");
  const [imageSaved, setImageSaved] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const refInputFiles = [useRef(null), useRef(null), useRef(null)]; // Array of refs for each input
  const elementRef = useRef(null);
  const typeImages = ["image/png", "image/jpeg", "image/jpg"];

  useEffect(() => {
    if (imageSaved) {
      const timer = setTimeout(() => {
        setImageSaved(false);
      }, 6000);
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
    <>
      <div
        className={`pt-4 bg-white max-md:mx-auto max-xl:mx-auto m-auto px-2 ${
          changeColor === true ? "bg-white" : "bg-white"
        } `}
        ref={elementRef}
      >
        <Photo
          image={polaroids[0]}
          inputRef={refInputFiles[0]}
          selectImage={() => selectImage(0)}
          elementRef={elementRef}
          addImage={(e) => addImage(0, e)}
          changeColor={setChangeColor}
        />
        <Photo1
          image={polaroids[1]}
          inputRef={refInputFiles[1]}
          selectImage={() => selectImage(1)}
          elementRef={elementRef}
          addImage={(e) => addImage(1, e)}
          changeColor={setChangeColor}
        />
        <Photo2
          image={polaroids[2]}
          inputRef={refInputFiles[2]}
          selectImage={() => selectImage(2)}
          elementRef={elementRef}
          addImage={(e) => addImage(2, e)}
          changeColor={setChangeColor}
        />
      </div>

      <Button
        htmlToImageConvert={htmlToImageConvert}
        resetPhotos={resetPhotos}
      />
      {imageSaved && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Resultado;
