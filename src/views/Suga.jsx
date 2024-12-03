import FormularioSuga from "../components/sugaverse/sugacomponents/FormularioSuga";
import { ResultadoSuga } from "../components/sugaverse/sugacomponents/ResultadoSuga";
import useRequestInfo from "../hooks/useRequestInfo";

function Suga() {
  const { resultado, cargando } = useRequestInfo();

  return (
    <div className=" min-h-screen  bg-backsuga bg-cover bg-no-repeat pt-16">
      <div className="flex flex-col items-center">
        
        {cargando ? <FormularioSuga /> : resultado && <ResultadoSuga />}
      </div>
    </div>
  );
}

export default Suga;
