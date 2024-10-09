import { useEffect, useRef } from "react";
import useDownload from "../../hooks/useDownload";
import { CARDDESKTOP, CARDPHONE } from "./Data";

export const HobiDischargeResult = ({
  name,
  setCountry,
  country,
  selectedImage,
  isMobile,
  diseño,
}) => {
  const canvasRef = useRef(null);
  const { handleDownloadImage } = useDownload();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = selectedImage;

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
  }, [selectedImage]);

  const getTextColor = () => {
    if (
      selectedImage.includes(CARDPHONE.ver1P) ||
      selectedImage.includes(CARDDESKTOP.ver1D)
    ) {
      return "text-[#7167e6]"; // Color 1
    } else if (
      selectedImage.includes(CARDPHONE.ver2P) ||
      selectedImage.includes(CARDDESKTOP.ver2D)
    ) {
      return "text-[rgb(188,79,77)]"; // Color 2
    }
  };

  const handleOther = () => {
    setCountry({});
  };

  return (
    <>
      <div className="relative flex justify-center items-center max-sm:text-xs">
        <div className="relative w-full" id="print">
          <canvas ref={canvasRef} className="mx-auto" />
          <div
            className={`absolute inset-0 flex flex-col font-extrabold font-providence items-center justify-end shadow-2xl ${
              isMobile ? "pb-20" : "pb-14"
            }`}
          >
            <div
              className={`text-xl px-14 max-sm:text-md ${getTextColor(diseño)}`}
            >
              {name}
            </div>
            <div
              className={`text-xl px-14 max-sm:text-md ${getTextColor(diseño)}`}
            >
              from {country}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 pt-2">
        <button
          onClick={handleOther}
          className=" bg-black text-white cursor-pointer p-3 font-providence uppercase disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors rounded-xl"
        >
          Other
        </button>
        <button
          onClick={handleDownloadImage}
          className=" bg-black text-white cursor-pointer p-3 font-providence uppercase disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors rounded-xl"
        >
          Share
        </button>
      </div>
    </>
  );
};
