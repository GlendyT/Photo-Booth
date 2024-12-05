import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardInside from "../Card/CardInside";
import useDownload from "../../../hooks/useDownload";
import Header from "../Titulo/Header";
import useRequestInfo from "../../../hooks/useRequestInfo";

const notify = () => {
  toast.success("Image Downloaded!", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
  });
};

export function ResultadoSuga() {
  const { handleDownloadImage } = useDownload();
  const { resultado } = useRequestInfo();
  const { name, content, diseño } = resultado;

  const [imageSaved, setImageSaved] = useState(false);

  useEffect(() => {
    if (imageSaved) {
      const timer = setTimeout(() => {
        notify();
        setImageSaved(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [imageSaved]);

  const elementRef = useRef(null);

  return (
    <div className=" sm:justify-center max-sm:text-xs">
      <div className=" sm:max-w-sm w-full">
        <Header />
        <CardInside
          name={name}
          content={content}
          diseño={diseño}
          elementRef={elementRef}
          handleDownloadImage={handleDownloadImage}
          notify={notify}
        />
        <ToastContainer />
      </div>
    </div>
  );
}
