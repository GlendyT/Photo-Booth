import Photo from "../components/PhotoBoothStrips/DragImage/Photo";
import Photo1 from "../components/PhotoBoothStrips/DragImage/Photo1";
import Photo2 from "../components/PhotoBoothStrips/DragImage/Photo2";
import Button from "../components/PhotoBoothStrips/Button";
import Loader from "../components/Loader/Loader";
import useDownload from "../hooks/useDownload";
import Logo from "../components/PhotoBoothStrips/DragImage/Logo";
import logo1 from "../../src/components/PhotoBoothStrips/assetsBooth/festa_logo.webp";
import useRequestInfo from "../hooks/useRequestInfo";

const PhotoBooth = () => {
  const { handleDownloadImage } = useDownload();
  const {
    error,
    messageError,
    polaroids,
    imageSaved,
    changeColor,
    setChangeColor,
    photo2Complete,
    resetPhotos,
    refInputFiles,
    elementRef,
    selectImage,
    addImage,
  } = useRequestInfo();

  return (
    <div className=" min-h-screen bg-backphoto bg-no-repeat bg-cover bg-center max-sm:pt-12">
      <div className="flex flex-col items-center ">
        {error && (
          <div className="bg-red-700 text-white rounded-lg p-2">
            {messageError}
          </div>
        )}
        <div
          className={`pt-2 max-xl:mx-auto m-auto px-2  bg-purple-500 pb-4`}
          id="print"
        >
          <Photo
            image={polaroids[0]}
            inputRef={refInputFiles[0]}
            selectImage={() => selectImage(0)}
            elementRef={elementRef}
            addImage={(e) => addImage(0, e)}
            changeColor={changeColor}
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
