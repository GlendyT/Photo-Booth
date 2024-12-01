import { VFormulario } from "../components/VPassport/VFormulario";
import { VResultado } from "../components/VPassport/VResultado";
import useRequestInfo from "../hooks/useRequestInfo";

export default function Vpassport() {
  const { resultado, cargando } = useRequestInfo();
  return (
    <div
      className={`min-h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center ${
        cargando
          ? "bg-largeScreen2  max-sm:bg-smallScreen"
          : resultado && "bg-largeScreen  max-sm:bg-smallScreen2"
      }`}
    >
      <div className="flex flex-col items-center ">
        {cargando ? <VFormulario /> : resultado && <VResultado />}
      </div>
    </div>
  );
}
