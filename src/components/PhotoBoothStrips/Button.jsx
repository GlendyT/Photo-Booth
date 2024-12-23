import useDownload from "../../hooks/useDownload";
import usePhotobooth from "../../hooks/usePhotobooth";
import { ButtonUtils } from "../utils/ButtonUtils";

const Button = () => {
  const {resetPhotos,photo2Complete} = usePhotobooth();
  const { handleDownloadImage } = useDownload();
  const handleDownload = () => {
    handleDownloadImage();
  };
  

  return (
    <div className="flex max-sm:flex max-sm:flex-row gap-1 max-sm:justify-center">
      <ButtonUtils
        label="Save"
        onClick={handleDownload}
        disabled={!photo2Complete}
        className=" p-2 mt-4 max-sm:mt-2 "
        bgColor="bg-black"
        textColor="text-white"
        hoverColor="hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85%"
        font="font-ballet"
        disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed disabled:hover:bg-none "
      />

      <ButtonUtils
        label="Restart"
        onClick={resetPhotos}
        disabled={!photo2Complete}
        className="p-2 mt-4  max-sm:mt-2"
        bgColor="bg-black"
        textColor="text-white"
        hoverColor="hover:bg-gradient-to-r from-amber-600 from-5% via-red-700 via-40% to-indigo-900 to-85%"
        font="font-ballet"
        disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed disabled:hover:bg-none "
      />
    </div>
  );
};

export default Button;
