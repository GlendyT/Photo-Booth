
import Card from "../components/ValentinDay/Card";
import Formulario from "../components/ValentinDay/Formulario";
import useRequestInfo from "../hooks/useRequestInfo";



export default function LoveNotes() {

  const { resultado, cargando} = useRequestInfo()

  return (
    <div className="flex justify-center items-center  bg-BackgroundV bg-cover bg-no-repeat  h-screen w-screen">
     <div className="flex flex-col items-center">
      { cargando ? <Formulario/> : resultado && <Card/>}

      </div> 
    </div>
    
  )
}
