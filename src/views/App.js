import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MagicShop from "../components/MagicShop/MagicShop";


function App() {

  const [ doors, setDoors] = useState(false)

useEffect(() => {
  const opendoors = setTimeout(() => {
    setDoors(true)
  }, 6000)

  return () => clearTimeout(opendoors)
}, [])


  return (
    <> 
    {!doors ? (
      <MagicShop/>
    ) : (
      <div className=" relative min-h-screen bg-backmain bg-cover bg-no-repeat ">
      <div className="grid grid-cols-4 px-40 py-20 gap-6 max-sm:flex max-sm:flex-col max-sm:py-12 max-sm:px-20 ">
        <Link to="/polaroid" className="px-4 max-sm:py-6 py-16 bg-black hover:bg-btsgif3 hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl ">
          <div className="  text-white  ">
            <div className="flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
              <div className="flex flex-col gap-8">
                <div className="text-sm">
                  BTS{" "}
                  <h1 className="uppercase font-extrabold">Random Polaroid</h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/photobooth" className="px-4 max-sm:py-6 py-16 bg-black  hover:bg-btsgif1 hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl ">
          <div className="  text-white ">
            <div className=" flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
              <div className="flex flex-col gap-8">
                <div className="text-sm">
                  BTS <h1 className="uppercase font-extrabold">Photobooth</h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/sugaverse" className=" bg-sugalogo bg-contain bg-no-repeat bg-center px-10 max-sm:py-6 py-16 hover:bg-backsuga hover:bg-cover hover:bg-center hover:bg-no-repeat  hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl ">
        </Link>
        <Link to="/hobipalooza" className=" bg-hobilogo bg-contain bg-no-repeat bg-center  px-10 max-sm:py-6 py-16 hover:bg-gifhobi hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl ">
        </Link>

        <Link to="/bingo" className="px-4 max-sm:py-6 py-16 bg-black  hover:bg-bingo hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl  ">
          <div className=" text-white  ">
            <div className=" flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
              <div className="flex flex-col gap-8">
                <div className="text-sm">
                  BTS{" "}
                  <h1 className="uppercase font-extrabold">BINGO</h1>
                </div>
              </div>
            </div>
          </div>
        </Link>

{ /*       <Link to="/rain" className="px-4 max-sm:py-6 py-16 bg-black  hover:bg-btsgif2 hover:bg-cover hover:bg-center hover:bg-no-repeat hover:outline-4 hover:outline hover:outline-white hover:rounded-3xl  ">
          <div className=" text-white  ">
            <div className=" flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
              <div className="flex flex-col gap-8">
                <div className="text-sm">
                  BTS{" "}
                  <h1 className="uppercase font-extrabold">Rain of Photos</h1>
                </div>
              </div>
            </div>
          </div>
        </Link>*/}
      </div>

      
    </div>
    ) }


    </>
  );
}

export default App;

/*     */


