import Formulariohobi from "../components/hobipalloza/hobicomponents/Formulariohobi";
import HomeHobi from "../components/hobipalloza/hobicomponents/HomeHobi";
import useRequestInfo from "../hooks/useRequestInfo";

export default function Hobi() {
  const { resultado, cargando } = useRequestInfo();

  return (
    <div className=" min-h-screen flex justify-center items-center bg-backhobi2 bg-no-repeat bg-center bg-cover ">
      <div className="flex flex-col items-center ">
        {cargando ? <Formulariohobi /> : resultado && <HomeHobi />}
      </div>
    </div>
  );
}
