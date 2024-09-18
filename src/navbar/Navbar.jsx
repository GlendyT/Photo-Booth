import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="absolute block py-2 pl-2 z-10 w-full bg-nav bg-cover bg-no-repeat">
        <div className="flex flex-row items-center justify-center max-sm:justify-start">
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776; {/* Unicode character for hamburger icon */}
          </button>

          <div className="hidden md:flex flex-row items-center gap-2">
            <Link
              to="/"
              className={
                menu === "menu"
                  ? "text-xl font-bad font-extrabold py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl font-bad font-extrabold"
              }
            >
              Home
            </Link>
            <Link
              to="/polaroid"
              className={
                menu === "polaroid"
                  ? "text-xl font-pacific py-1 px-2 text-violet-400 underline rounded-xl"
                  : "cursor-pointer text-white text-xl font-pacific "
              }
            >
              Polaroid
            </Link>
            <Link
              to="/photobooth"
              className={
                menu === "photobooth"
                  ? "text-xl font-playwrite py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl font-playwrite"
              }
            >
              Photobooth
            </Link>
            <Link
              to="/sugaverse"
              className={
                menu === "sugaverse"
                  ? "text-xl font-glich py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl font-glich"
              }
            >
              Sugaverse
            </Link>
            <Link
              to="/hobipalooza"
              className={
                menu === "hobipalooza"
                  ? "text-xl font-rock  py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl font-rock"
              }
            >
              Hobipalooza
            </Link>
            <Link
              to="/bingo"
              className={
                menu === "bingo"
                  ? "text-xl font-semiboldsans px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl font-semiboldsans"
              }
            >
              Bingo
            </Link>
            <Link
              to="/vpassport"
              className={
                menu === "vpassport"
                  ? "text-sm font-michroma px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-sm font-michroma"
              }
            >
              Vpassport
            </Link>
            <Link
              to="/hobisback"
              className={
                menu === "hobisback"
                  ? "text-xl font-dmmono px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl font-dmmono"
              }
            >
              Hobisback
            </Link>
            {/*          <Link
              to="/rain"
              className={
                menu === "rain"
                  ? "text-xl font-indie py-1 px-2 underline text-violet-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl font-indie"
              }
            >
              Rain
            </Link> */}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute block w-44 h-60 top-10 pt-2 pl-6 backdrop-blur-sm bg-black/90 z-10 `}
      >
        <Link
          to="/"
          className={
            menu === "menu"
              ? "block text-xl font-bold font-bad py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-bad"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/polaroid"
          className={
            menu === "polaroid"
              ? "block text-xl font-pacific font-bold py-1 text-violet-400 underline "
              : "block cursor-pointer text-white text-xl font-pacific "
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Polaroid
        </Link>
        <Link
          to="/photobooth"
          className={
            menu === "photobooth"
              ? "block text-xl font-playwrite font-bold py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-playwrite"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Photobooth
        </Link>
        <Link
          to="/sugaverse"
          className={
            menu === "sugaverse"
              ? "block text-xl font-glich font-thin py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-glich font-thin"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Sugaverse
        </Link>
        <Link
          to="/hobipalooza"
          className={
            menu === "hobipalooza"
              ? "block text-xl font-bold font-rock py-1 underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-rock"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Hobipalooza
        </Link>
        <Link
          to="/bingo"
          className={
            menu === "bingo"
              ? "block text-xl font-semiboldsans font-bold py-1  underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-semiboldsans"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Bingo
        </Link>
        <Link
          to="/vpassport"
          className={
            menu === "vpassport"
              ? "block text-base font-michroma font-bold py-1  underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-michroma"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Vpassport
        </Link>
        <Link
          to="/hobisback"
          className={
            menu === "hobisback"
              ? "block text-xl font-dmmono py-1  underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-dmmono"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Hobisback
        </Link>

        {/*        <Link
          to="/rain"
          className={
            menu === "rain"
              ? "block text-xl font-indie  font-bold py-1  underline text-violet-400 cursor-pointer "
              : "block cursor-pointer text-white text-xl font-indie "
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Rain
        </Link>*/}
      </div>
      <Outlet />
    </>
  );
}
