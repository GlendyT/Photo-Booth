import useDownload from "../../hooks/useDownload";
import usePhotobooth from "../../hooks/usePhotobooth";
import { ButtonUtils } from "../../utils/ButtonUtils";

const Button = () => {
  const { resetPhotos, photo2Complete, backgroundImage } = usePhotobooth();
  const { handleDownloadImage } = useDownload();
  const handleDownload = () => {
    handleDownloadImage();
  };

  return (
    <div className="flex flex-col gap-2 max-md:gap-0 max-sm:justify-center">
      <ButtonUtils
        label="Save"
        onClick={handleDownload}
        disabled={!photo2Complete}
        className=" max-sm:mt-2 "
        bgColor="bg-black"
        textColor="text-white"
        hoverColor="hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85%"
        font="font-ballet"
        disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed disabled:hover:bg-none "
        padding="py-2 px-4"
      />

      <ButtonUtils
        label="Restart"
        onClick={resetPhotos}
        disabled={!backgroundImage && !photo2Complete}
        className="  max-sm:mt-2"
        bgColor="bg-black"
        textColor="text-white"
        hoverColor="hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85%"
        font="font-ballet"
        disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed disabled:hover:bg-none "
        padding="py-2 px-2"
      />
    </div>
  );
};

export default Button;
