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
    <div className=" min-h-screen bg-backphoto bg-no-repeat bg-cover bg-center max-sm:pt-1">
      <div className="flex flex-col items-center ">
        <div
          className={`pt-2 max-xl:mx-auto m-auto px-2  bg-purple-500 pb-4`}
          id="print"
        >
          <Photo handleFileChange={handleFileChangePhoto1} preview={preview1} />
          <Photo1
            handleFileChange={handleFileChangePhoto2}
            preview={preview2}
          />
          <Photo2
            handleFileChange={handleFileChangePhoto3}
            preview={preview3}
          />
          <Logo />
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
