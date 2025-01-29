
import Card from "../components/ValentinDay/Card";
import Formulario from "../components/ValentinDay/Formulario";
import useRequestInfo from "../hooks/useRequestInfo";



export default function BalenTineS() {

  const { resultado, cargando} = useRequestInfo()

  return (
    <div className="min-h-screen flex justify-center items-center bg-BackgroundV">
     <div className="flex flex-col items-center">
      { cargando ? <Formulario/> : resultado && <Card/>}

      </div> 
    </div>
    
  )
}
