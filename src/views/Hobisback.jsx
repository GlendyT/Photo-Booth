import { HobiFormDischarge } from "../components/HobiDischarge/HobiFormDischarge.jsx";
import { HobiModalAccess } from "../components/HobiDischarge/HobiModalAccess.jsx";
import { HobiDischargeResult } from "../components/HobiDischarge/HobiDischargeResult.jsx";
import useRequestInfo from "../hooks/useRequestInfo.jsx";
function Hobisback() {
  const {  isMobile, resultado, showModal, cargando } =
    useRequestInfo();

  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat  ${
          cargando
            ? "bg-bghobiDesktop1 max-sm:bg-bghobimobile2"
            : resultado && "bg-bghobiDesktop2 max-sm:bg-bghobimobile1"
        } ${isMobile ? "pt1" : "pt-16"} `}
      >
        <div className="flex flex-col items-center">
          {cargando ? (
            <HobiFormDischarge />
          ) : (
            resultado && <HobiDischargeResult />
          )}
           {showModal ? <HobiModalAccess /> : null} 
        </div>
      </div>
    </>
  );
}

export default Hobisback;
