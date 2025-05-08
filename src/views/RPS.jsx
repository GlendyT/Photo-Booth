import CardRPS from "../components/RPS/CardRPS";
import FormOponent from "../components/RPS/FormOponent";
import useRequestInfo from "../hooks/useRequestInfo";

export default function RPS() {
  const { resultado, cargando,} =
    useRequestInfo();

  return (
    <div className="min-h-screen bg-rpsweb bg-cover bg-center max-md:bg-rpsmob max-md:bg-cover max-md:bg-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className=" rounded-xl  bg-purple-100/25 backdrop-blur-md shadow-lg">
          <h1 className="text-3xl max-md:text-xl pt-6 text-center font-extrabold font-fuzzybubbles uppercase">
            Let´s Play!
          </h1>
          

          {cargando ? <FormOponent /> : resultado && <CardRPS />}
      
        </div>
      </div>
    </div>
  );
}
