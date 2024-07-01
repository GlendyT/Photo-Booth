import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardInside from "../Card/CardInside";
import useDownload from "../../../hooks/useDownload";
import Header from "../Titulo/Header";

const notify = () => {
  toast.success('Image Downloaded!', {
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


export function ResultadoSuga({ descripcion,setDescripcion, remitente, diseño }) {

  const {handleDownloadImage} = useDownload()

  const [imageSaved, setImageSaved] = useState(false);

  useEffect(() => {
      if(imageSaved) {
        const timer = setTimeout(() => {
          notify();
          setImageSaved(false);
        }, 3000);

        return () => clearTimeout(timer);
      }
  }, [imageSaved]);

  const elementRef = useRef(null);

  const handleLogout = () =>{
    setDescripcion({})
  }


  return (
    <div className="relative sm:justify-center items-center max-sm:text-xs">
      <div className="relative sm:max-w-sm w-full">
        <Header/>
            <CardInside
             descripcion={descripcion}
             remitente={remitente}
             diseño={diseño}
             elementRef={elementRef}
             handleLogout= {handleLogout}
             handleDownloadImage={handleDownloadImage}
             notify= {notify}
            />
            <ToastContainer/>
      </div>
    </div>
  );
}
