import { useState } from "react";
import { ButtonUtils } from "../utils/ButtonUtils";

export const VButton = ({ handleDownloadImage, handleResetContent }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleDownload = () => {
    setButtonDisabled(true);
    handleDownloadImage();
  };

  return (
    <>
      <ButtonUtils
        label="RESTART"
        onClick={handleResetContent}
        className="  uppercase"
        bgColor="bg-black"
        textColor="text-white"
        hoverColor="  hover:bg-greenButton hover:text-black"
        font="font-michroma"
      />
      <ButtonUtils
        label={buttonDisabled ? "Downloaded" : "Share"}
        onClick={() => handleDownload()}
        disabled={buttonDisabled}
        className=" uppercase"
        bgColor="bg-black"
        textColor="text-white"
        hoverColor="  hover:bg-greenButton hover:text-black"
        font="font-michroma"
        disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed disabled:hover:text-white disabled:hover:bg-none disabled:bg-none"
      />
    </>
  );
};
