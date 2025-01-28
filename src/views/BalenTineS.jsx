
import Card from "../components/ValentinDay/Card";
import Formulario from "../components/ValentinDay/Formulario";
import useRequestInfo from "../hooks/useRequestInfo";



export default function BalenTineS() {

  const { resultado, cargando} = useRequestInfo()

  return (
    <div>


      { cargando ? <Formulario/> : resultado && <Card/>}

    </div>
    
  )
}
