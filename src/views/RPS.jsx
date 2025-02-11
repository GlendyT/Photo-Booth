import CardRPS from "../components/RPS/CardRPS";
import FormOponent from "../components/RPS/FormOponent";
import useRequestInfo from "../hooks/useRequestInfo";

export default function RPS() {

  const { resultado, cargando } = useRequestInfo();
  return (
    <div className="min-h-screen bg-violet-400 ">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className=" rounded-xl p-4">
          <h1 className="text-3xl mb-4 text-center font-bold">Let´s Play!</h1>

          {cargando ? <FormOponent/> : resultado && <CardRPS />}

         
        </div>
       
      </div>
    </div>
  );
}
