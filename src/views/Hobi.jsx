import Formulariohobi from "../components/hobipalloza/hobicomponents/Formulariohobi";
import HomeHobi from "../components/hobipalloza/hobicomponents/HomeHobi";
import useRequestInfo from "../hooks/useRequestInfo";

export default function Hobi() {
  const { resultado, cargando } = useRequestInfo();

  return (
    <div className=" min-h-screen bg-backhobi2 bg-no-repeat bg-center bg-cover pt-16 ">
      <div className="flex flex-col items-center justify-center max-sm:pt-10">
        {cargando ? <Formulariohobi /> : resultado && <HomeHobi />}
      </div>
    </div>
  );
}
