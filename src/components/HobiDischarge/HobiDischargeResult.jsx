import { useEffect, useRef } from "react";
import useDownload from "../../hooks/useDownload";
import { CARDDESKTOP, CARDPHONE } from "./Data";
import { ButtonUtils } from "../utils/ButtonUtils";
import useRequestInfo from "../../hooks/useRequestInfo";

export const HobiDischargeResult = () => {
  const { handleDownloadImage } = useDownload();
  const { isMobile, usuario, handleResetContent } = useRequestInfo();
  const { diseño, name, content } = usuario;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = diseño;

    image.onload = () => {
      const maxWidth = window.innerWidth < 640 ? 350 : 500;
      const scale = maxWidth / image.width;
      const imageWidth = image.width * scale;
      const imageHeight = image.height * scale;

      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = imageWidth * pixelRatio;
      canvas.height = imageHeight * pixelRatio;

      canvas.style.width = `${imageWidth}px`;
      canvas.style.height = `${imageHeight}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      context.drawImage(image, 0, 0, imageWidth, imageHeight);
    };
  }, [diseño]);

  const getTextColor = () => {
    if (
      diseño.includes(CARDPHONE.ver1P) ||
      diseño.includes(CARDDESKTOP.ver1D)
    ) {
      return "text-[#7167e6]"; // Color 1
    } else if (
      diseño.includes(CARDPHONE.ver2P) ||
      diseño.includes(CARDDESKTOP.ver2D)
    ) {
      return "text-[rgb(188,79,77)]"; // Color 2
    }
  };

  return (
    <>
      <div className="relative flex max-sm:text-xs">
        <canvas ref={canvasRef} className="mx-auto" id="print" />
        <div
          className={`absolute inset-0 flex flex-col font-extrabold font-providence items-center justify-end shadow-2xl ${
            isMobile ? "pb-20" : "pb-[4.5rem]"
          }`}
        >
          <div
            className={`text-lg px-14 max-sm:text-md ${getTextColor(diseño)}`}
          >
            {name}
          </div>
          <div
            className={`text-lg px-14 max-sm:text-md ${getTextColor(diseño)}`}
          >
            from {content}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 pt-2">
        <ButtonUtils
          label="Back to main page"
          onClick={handleResetContent}
          className=" uppercase  "
          bgColor="bg-black"
          textColor="text-white"
          font="font-providence"
          disableColors=" disabled:bg-opacity-25 disabled:cursor-not-allowed"
        />
        <ButtonUtils
          label={!handleDownloadImage ? "download" : "downloaded"}
          onClick={handleDownloadImage}
          className="  uppercase  "
          bgColor="bg-black"
          textColor="text-white"
          font="font-providence"
          disableColors=" disabled:bg-opacity-25 disabled:cursor-not-allowed"
        />
      </div>
    </>
  );
};
