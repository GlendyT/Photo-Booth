import { createContext, useEffect, useState } from "react";

import useImageCrop from "../hooks/useImageCrop";
import { readFile } from "../components/Photobooth/cropImage";

const PhotoBoothContext = createContext();

const PhotoBoothProvider = ({ children }) => {
  // const [polaroids, setPolaroids] = useState([]);
  // const [messageError, setMessageError] = useState("");
  // const [imageSaved, setImageSaved] = useState(false);
  // const [changeColor, setChangeColor] = useState(false);
  // const [photo2Complete, setPhoto2Complete] = useState(false);

  // const refInputFiles = [useRef(null), useRef(null), useRef(null)]; // Array of refs for each input
  // const elementRef = useRef(null);
  // const typeImages = ["image/png", "image/jpeg", "image/jpg"];
  // const { setError, error } = useRequestInfo()

  // const selectImage = (index) => {
  //   refInputFiles[index].current.click();
  // };
  // const isImageValid = (polaroid) => {
  //   if (polaroid && typeImages.includes(polaroid.type)) {
  //     setError(false);
  //     return true;
  //   } else {
  //     setError(true);
  //     setMessageError("File is incorrect");
  //     return false;
  //   }
  // };
  // const showImage = (index, polaroid) => {
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(polaroid);

  //   fileReader.addEventListener("load", (e) => {
  //     setPolaroids((prevPolaroids) => {
  //       const updatedPolaroids = [...prevPolaroids];
  //       updatedPolaroids[index] = e.target.result;
  //       return updatedPolaroids;
  //     });
  //   });
  // };
  // const addImage = (index, e) => {
  //   e.preventDefault();

  //   const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;

  //   Array.from(files).forEach((file) => {
  //     if (isImageValid(file)) {
  //       showImage(index, file);
  //     }
  //   });
  // };
  // const resetPhotos = () => {
  //   setPolaroids([]);
  //   setChangeColor(false);
  //   setError(false);
  //   setImageSaved(false);
  // };

  // useEffect(() => {
  //   if (imageSaved) {
  //     const timer = setTimeout(() => {
  //       setImageSaved(false);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [imageSaved]);

  // useEffect(() => {
  //   if (polaroids[2] || polaroids[1] || polaroids[0]) {
  //     setPhoto2Complete(true);
  //   } else {
  //     setPhoto2Complete(false);
  //   }
  // }, [polaroids]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setError(false);
  //   }, 4000);
  // }, [error]);
  //TODO: CODE FOR PHOTOBOOTH WITH CROP
  const [openModal, setOpenModal] = useState(false);
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [preview3, setPreview3] = useState(null);
  const [changeColor, setChangeColor] = useState(false);
  const [imageSaved, setImageSaved] = useState(false);
  const [photo2Complete, setPhoto2Complete] = useState(false);
  const {  setImage } = useImageCrop();

  useEffect(() => {
    if (imageSaved) {
      const timer = setTimeout(() => {
        setImageSaved(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [imageSaved]);

  const handleFileChangePhoto1 = async ({ target: { files } }) => {
    const file1 = files && files[0];
    const imageDataUrl = await readFile(file1);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const handleFileChangePhoto2 = async ({ target: { files } }) => {
    const file2 = files && files[0];
    const imageDataUrl = await readFile(file2);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const handleFileChangePhoto3 = async ({ target: { files } }) => {
    const file3 = files && files[0];
    const imageDataUrl = await readFile(file3);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const resetPhotos = () => {
    setPreview1(null);
    setPreview2(null);
    setPreview3(null);
    setChangeColor(false);
    setImageSaved(false);
  };

  useEffect(() => {
    if (preview3) {
      setPhoto2Complete(true);
    } else {
      setPhoto2Complete(false);
    }
  }, [preview3]);

  return (
    <PhotoBoothContext.Provider
      value={{
        // polaroids,
        // setPolaroids,
        // messageError,
        // setMessageError,
        // changeColor,
        // setChangeColor,
        // photo2Complete,
        // setPhoto2Complete,
        // refInputFiles,
        // elementRef,
        // selectImage,
        // addImage,
        // resetPhotos,
        // typeImages,
        // isImageValid,
        // showImage,
        openModal,
        changeColor,
        photo2Complete,
        setPreview1,
        setPreview2,
        setPreview3,
        preview1,
        preview2,
        preview3,
        setOpenModal,
        setChangeColor,
        imageSaved,
        setImageSaved,
        setPhoto2Complete,
        handleFileChangePhoto1,
        handleFileChangePhoto2,
        handleFileChangePhoto3,
        resetPhotos
      }}
    >
      {children}
    </PhotoBoothContext.Provider>
  );
};

export { PhotoBoothProvider };

export default PhotoBoothContext;
