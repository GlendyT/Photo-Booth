import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState("");
//  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("menu");
    } else if (location.pathname === "/polaroid") {
      setMenu("polaroid");
    } else if (location.pathname === "/photobooth") {
      setMenu("photobooth");
    } else if (location.pathname === "/rain") {
      setMenu("rain");
    } else if (location.pathname === "/sugaverse") {
      setMenu("sugaverse");
    } else if (location.pathname === "/hobipalooza") {
      setMenu("hobipalooza");
    } else if (location.pathname === "/bingo") {
      setMenu("bingo");
    } else if (location.pathname === "/vpassport") {
      setMenu("vpassport");
    } else if (location.pathname === "/hobisback") {
      setMenu("hobisback");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="absolute py-2 px-2 z-10 w-full bg-nav bg-cover bg-no-repeat">
        <div className="flex flex-row items-center justify-center max-sm:justify-start gap-2">
          <div className="flex flex-row items-center gap-2 overflow-hidden overflow-x-auto">
            <Link
              to="/"
              className={
                menu === "menu"
                  ? "text-xs font-bad font-extrabold py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xs font-bad font-extrabold"
              }
            >
              Home
            </Link>
            <Link
              to="/polaroid"
              className={
                menu === "polaroid"
                  ? "text-xs font-pacific py-1 px-2 text-violet-400 underline rounded-xl"
                  : "cursor-pointer text-white text-xs font-pacific "
              }
            >
              Polaroid
            </Link>
            <Link
              to="/photobooth"
              className={
                menu === "photobooth"
                  ? "text-xs font-playwrite py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xs font-playwrite"
              }
            >
              Photobooth
            </Link>
            <Link
              to="/sugaverse"
              className={
                menu === "sugaverse"
                  ? "text-xs font-glich py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xs font-glich"
              }
            >
              Sugaverse
            </Link>
            <Link
              to="/hobipalooza"
              className={
                menu === "hobipalooza"
                  ? "text-xs font-rock  py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xs font-rock"
              }
            >
              Hobipalooza
            </Link>
            <Link
              to="/bingo"
              className={
                menu === "bingo"
                  ? "text-xs font-semiboldsans px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xs font-semiboldsans"
              }
            >
              Bingo
            </Link>
            <Link
              to="/vpassport"
              className={
                menu === "vpassport"
                  ? "text-xs font-michroma px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xs font-michroma"
              }
            >
              Vpassport
            </Link>
            <Link
              to="/hobisback"
              className={
                menu === "hobisback"
                  ? "text-xs font-dmmono px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xs font-dmmono"
              }
            >
              Hobisback
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

/*
           <button
            className=" sm:hidden text-white text-xs"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button> 
                 <div
        className={`sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute block w-44 h-60 top-10 py-8 pl-6 backdrop-blur-sm bg-black/90 z-10 `}
      >
        <Link
          to="/"
          className={
            menu === "menu"
              ? "block text-xs font-bold font-bad py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xs font-bad"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/polaroid"
          className={
            menu === "polaroid"
              ? "block text-xs font-pacific font-bold py-1 text-violet-400 underline "
              : "block cursor-pointer text-white text-xs font-pacific "
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Polaroid
        </Link>
        <Link
          to="/photobooth"
          className={
            menu === "photobooth"
              ? "block text-xs font-playwrite font-bold py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xs font-playwrite"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Photobooth
        </Link>
        <Link
          to="/sugaverse"
          className={
            menu === "sugaverse"
              ? "block text-xs font-glich font-thin py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xs font-glich font-thin"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Sugaverse
        </Link>
        <Link
          to="/hobipalooza"
          className={
            menu === "hobipalooza"
              ? "block text-xs font-bold font-rock py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xs font-rock"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Hobipalooza
        </Link>
        <Link
          to="/bingo"
          className={
            menu === "bingo"
              ? "block text-xs font-semiboldsans font-bold py-1  underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xs font-semiboldsans"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Bingo
        </Link>
        <Link
          to="/vpassport"
          className={
            menu === "vpassport"
              ? "block text-xs font-michroma font-bold py-1  underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xs font-michroma"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Vpassport
        </Link>
        <Link
          to="/hobisback"
          className={
            menu === "hobisback"
              ? "block text-xs font-dmmono py-1  underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xs font-dmmono"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Hobisback
        </Link>
      </div> 


*/
