import Formulariohobi from "../components/hobipalloza/hobicomponents/Formulariohobi";
import HomeHobi from "../components/hobipalloza/hobicomponents/HomeHobi";
import useRequestInfo from "../hooks/useRequestInfo";

export default function Hobi() {
  const { resultado, cargando } = useRequestInfo();

  return (
    <div className="relative  min-h-screen bg-backhobi2 bg-no-repeat bg-center bg-cover ">
      <div className="flex flex-col items-center max-sm:pt-10">
        {cargando ? <Formulariohobi /> : resultado && <HomeHobi />}
      </div>
    </div>
  );
}
