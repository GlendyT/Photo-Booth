import { HobiFormDischarge } from "../components/HobiDischarge/HobiFormDischarge.jsx";
import { HobiModalAccess } from "../components/HobiDischarge/HobiModalAccess.jsx";
import { HobiDischargeResult } from "../components/HobiDischarge/HobiDischargeResult.jsx";
import useRequestInfo from "../hooks/useRequestInfo.jsx";
function Hobisback() {
  const { isCorrectGuess, isMobile, resultado, showModal, cargando } =
    useRequestInfo();

  return (
    <>
      <div
        className={`relative min-h-screen flex items-center justify-center bg-bghobiDesktop1 bg-cover bg-center bg-no-repeat max-sm:bg-center max-sm:bg-bghobidischargep ${
          cargando
            ? "bg-bghobiDesktop1 max-sm:bg-bghobimobile2"
            : resultado && "bg-bghobiDesktop2 max-sm:bg-bghobimobile1"
        } ${isMobile ? "pt1" : "pt-16"} `}
      >
        <div
          className={`flex flex-col justify-center items-center max-sm:px-2 ${
            isCorrectGuess ? "" : "hidden"
          }`}
        >
          {cargando ? (
            <HobiFormDischarge />
          ) : (
            resultado && <HobiDischargeResult />
          )}
        </div>
        <>{showModal ? <HobiModalAccess /> : null}</>
      </div>
    </>
  );
}

export default Hobisback;
