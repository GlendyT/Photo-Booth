import { useEffect, useRef } from "react";
import useRequestInfo from "../../../../hooks/useRequestInfo";
import hw from "../../assetsPalooza/2.avif";

export default function TicketComponent() {
  const { usuario, isMobile } = useRequestInfo();
  const { name, album, song } = usuario;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = hw;

    image.onload = () => {
      const maxWidth = window.innerWidth < 640 ? 350 : 800;
      const scale = maxWidth / image.width;
      const imageWidth = image.width * scale;
      const imageHeight = image.height * scale;

      const pixelRatio = window.devicePixelRatio || 2;

      canvas.width = imageWidth * pixelRatio;
      canvas.height = imageHeight * pixelRatio;

      canvas.style.width = `${imageWidth}px`;
      canvas.style.height = `${imageHeight}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      context.drawImage(image, 0, 0, imageWidth, imageHeight);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center max-sm:text-xs">
      <div className="relative w-full" id="print">
        <canvas ref={canvasRef} className="mx-auto" />
        <div
          className={`absolute inset-0 flex flex-col font-extrabold font-providence items-start justify-end text-white ${
            isMobile ? "pb-20" : "pb-[6.5rem]"
          }`}
        >
          <div className={`text-lg px-14 max-sm:text-md  }`}>Name:{name}</div>
          <div className={`text-lg px-14 max-sm:text-md }`}>Country:{album}</div>
          <div className={`text-lg px-14 max-sm:text-md }`}>Location:{song}</div>
        </div>
      </div>
    </div>
  );
}
