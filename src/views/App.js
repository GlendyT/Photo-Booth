//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import MagicShop from "../components/MagicShop/MagicShop";

function App() {
  /*
  const [ doors, setDoors] = useState(false)

useEffect(() => {
  const opendoors = setTimeout(() => {
    setDoors(true)
  }, 6000)

  return () => clearTimeout(opendoors)
}, [])*/

  return (
    <>
      <div className=" relative min-h-screen bg-backmain  bg-cover bg-no-repeat max-sm:bg-center ">
        <div className="grid grid-cols-4 px-40 py-32 gap-6 max-sm:flex max-sm:flex-col max-sm:p-12  max-sm:gap-3">
          <Link
            to="/polaroid"
            className=" delay-150 hover:-translate-y-1 hover:scale-100 duration-700 px-4 py-16 bg-polaroidlogo bg-no-repeat bg-contain bg-center hover:bg-btsgif3 hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl max-sm:px-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]"
          ></Link>
          <Link
            to="/photobooth"
            className="delay-150 hover:-translate-y-1 hover:scale-100 duration-700 px-4 py-16 bg-photostrips bg-no-repeat bg-contain bg-center hover:bg-btsgif1 hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl max-sm:px-20  max-sm:bg-contain drop-shadow-[0_35px_35px_rgba(0,0,0,1)]"
          ></Link>
          <Link
            to="/sugaverse"
            className="delay-150 hover:-translate-y-1 hover:scale-100 duration-700 bg-sugalogoi4 bg-no-repeat bg-contain bg-center px-10 py-16 hover:bg-backsuga hover:bg-cover hover:bg-center hover:bg-no-repeat  hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl max-sm:px-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)] "
          ></Link>
          <Link
            to="/hobipalooza"
            className="delay-150 hover:-translate-y-1 hover:scale-100 duration-700 bg-jhopelogoi bg-no-repeat bg-contain bg-center px-10 py-16 hover:bg-gifhobi hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl max-sm:px-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]"
          ></Link>

          <Link
            to="/bingo"
            className=" delay-150 hover:-translate-y-1 hover:scale-100 duration-700 px-4  py-16 bg-bingologoi bg-no-repeat bg-contain bg-center  hover:bg-btsgif2 hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl max-sm:px-20 drop-shadow-[0_35px_35px_rgba(0,0,0,2)]"
          ></Link>
          <Link
            to="/vpassport"
            className="delay-150 hover:-translate-y-1 hover:scale-100 duration-700 px-4 py-16 bg-vlogo bg-no-repeat bg-contain bg-center  hover:bg-gifV hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl max-sm:px-20 drop-shadow-[0_35px_35px_rgba(0,0,0,2)]"
          ></Link>
          <Link
            to="/hobisback"
            className=" delay-150 hover:-translate-y-1 hover:scale-100 duration-700 px-4  py-16 bg-jhopelogoi1 bg-no-repeat bg-contain bg-center hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl max-sm:px-20 drop-shadow-[0_35px_35px_rgba(0,0,0,2)]"
          ></Link>
        </div>
      </div>
    </>
  );
}

export default App;

/*     */
