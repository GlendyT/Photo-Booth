
import {  useState } from "react";
import FormularioSuga from "../components/sugaverse/sugacomponents/FormularioSuga";
import { ResultadoSuga } from "../components/sugaverse/sugacomponents/ResultadoSuga";



function Suga() {
  const [descripcion, setDescripcion] = useState([]);
  const [remitente, setRemitente] = useState([]);
  const [diseño, setDiseño] = useState([]);


  return (
    <div className=" min-h-screen  bg-backsuga bg-cover bg-no-repeat">
      <div className="flex flex-col items-center">

      {!descripcion.length > 0 ? (
        <FormularioSuga setDescripcion={setDescripcion} setRemitente={setRemitente} setDiseño={setDiseño}  />
      ) : (
        <ResultadoSuga
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        remitente={remitente}
        setRemitente={setRemitente}
        diseño={diseño}
        setDiseño={setDiseño}
      />


      )}
       </div>
    </div>
  );
}

export default Suga;
