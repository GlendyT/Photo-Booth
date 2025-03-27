import Photo from "../components/Photobooth/Photo";
import Photo1 from "../components/Photobooth/Photo";
import Photo2 from "../components/Photobooth/Photo";
import Loader from "../components/Loader/Loader";
import Logo from "../components/PhotoBoothStrips/DragImage/Logo";
import ImageCropModalContent from "../components/Photobooth/ImageCropModalContent";
import Button from "../components/PhotoBoothStrips/Button";
import Modal from "../components/Photobooth/base/Modal";
import usePhotobooth from "../hooks/usePhotobooth";
import useImageCrop from "../hooks/useImageCrop";
import { BTSpersonalized } from "../components/Photobooth/BTSpersonalized";

const Photobooth = () => {
  const {
    setPreview1,
    setPreview2,
    setPreview3,
    preview1,
    preview2,
    preview3,
    openModal,
    setOpenModal,
    imageSaved,
    handleFileChangePhoto1,
    handleFileChangePhoto2,
    handleFileChangePhoto3,
    backgroundImage,
    setBackgroundImage,
  } = usePhotobooth();
  const { getProcessedImage, resetStates } = useImageCrop();
  

  const handleDone = async () => {
    const avatar = await getProcessedImage();
    const previews = [preview1, preview2, preview3];
    const index = previews.findIndex((preview) => !preview);

    if (index !== -1) {
      previews[index] = window.URL.createObjectURL(avatar);
      setPreview1(previews[0]);
      setPreview2(previews[1]);
      setPreview3(previews[2]);
    }

    resetStates();
    setOpenModal(false);
  };
  

  return (
    <div className=" min-h-screen bg-backphoto bg-no-repeat bg-cover bg-center">
      <div className="flex flex-row gap-4 max-md:gap-1 items-center justify-center ">
        <BTSpersonalized setBackgroundImage={setBackgroundImage} />
        <div
          className={`pt-10  bg-center bg-no-repeat pb-4 relative object-cover ${
            backgroundImage ? "px-10 bg-transparent" : "px-2 bg-purple-500 "
          }`}
          id="print"
        >
          {backgroundImage && (
            <img
              src={backgroundImage}
              alt="Background"
              className="absolute top-0 left-0 w-96 h-auto object-cover "
            />
          )}
          <div className="relative z-0 flex flex-col items-center ">
            <Photo
              handleFileChange={handleFileChangePhoto1}
              preview={preview1}
              backgroundImage={backgroundImage}
            />
            <Photo1
              handleFileChange={handleFileChangePhoto2}
              preview={preview2}
              backgroundImage={backgroundImage}
            />
            <Photo2
              handleFileChange={handleFileChangePhoto3}
              preview={preview3}
              backgroundImage={backgroundImage}
            />
            <Logo backgroundImage={backgroundImage} />
          </div>
        </div>
        <Button />

        <Modal open={openModal} handleClose={() => setOpenModal(false)}>
          <ImageCropModalContent
            handleDone={handleDone}
            handleClose={() => setOpenModal(false)}
          />
        </Modal>
      </div>

      {imageSaved && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Photobooth;


