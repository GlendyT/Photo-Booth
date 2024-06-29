import { Link } from "react-router-dom";

function App() {


  return (
    <div className="grid grid-cols-3 px-40 pb-20 pt-6 gap-4 max-sm:flex max-sm:flex-col max-sm:py-2 max-sm:px-10">
      <Link to="/polaroid">
        <div className=" shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] hover:bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white px-10 py-14">
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
      <Link to="/photobooth">
        <div className=" shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] hover:bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white px-10 py-14">
          <div className=" flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
            <div className="flex flex-col gap-8">
              <div className="text-sm">
                BTS <h1 className="uppercase font-extrabold">Photobooth</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/sugaverse">
        <div className="shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] hover:bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white px-10 py-14 ">
          <div className=" flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
            <div className="flex flex-col gap-8">
              <div className="text-sm">
                BTS <h1 className="uppercase font-extrabold">SugaVerse</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/hobipalooza">
        <div className="shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] hover:bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white px-10 py-14 ">
          <div className=" flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
            <div className="flex flex-col gap-8">
              <div className="text-sm">
                BTS <h1 className="uppercase font-extrabold">HobiPalooza</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/rain">
        <div className="shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] hover:bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white px-10 py-14 ">
          <div className=" flex flex-row-2 gap-8 justify-center items-center max-sm:flex-col max-sm:text-center">
            <div className="flex flex-col gap-8">
              <div className="text-sm">
                BTS <h1 className="uppercase font-extrabold">Rain of Photos</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default App;


/*    */
