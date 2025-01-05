import { ButtonUtils } from "../../../../utils/ButtonUtils";


export default function Botones({ handleResetContent, handleDownloadImage }) {
  const handleDownload = () => {
    handleDownloadImage();
  };
  return (
    <div className=" max-sm:mt-2 mt-10 flex flex-row gap-4">
      <ButtonUtils
        label="Download"
        onClick={handleDownload}
        className=" mt-4   max-sm:mt-2 "
        bgColor="bg-pink-600"
        textColor="text-white"
        hoverColor=" hover:bg-black hover:text-[#5abecd]"
        font=" uppercase"
      />

      <ButtonUtils
        label="Restart"
        onClick={handleResetContent}
        className=" mt-4   max-sm:mt-2 "
        bgColor="bg-pink-600"
        textColor="text-white"
        hoverColor=" hover:bg-black hover:text-[#5abecd]"
        font=" uppercase"
      />
    </div>
  );
}
