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
              className={` text-xl font-bad cursor-pointer
                ${
                  menu === "menu"
                    ? " underline text-violet-400"
                    : " text-white "
                }`}
            >
              Home
            </Link>
            <Link
              to="/polaroid"
              className={` text-xl font-pacific cursor-pointer
                ${
                  menu === "polaroid"
                    ? " text-violet-400 underline"
                    : " text-white  "
                }`}
            >
              Polaroid
            </Link>
            <Link
              to="/photobooth"
              className={`text-xl font-playwrite cursor-pointer
                ${
                  menu === "photobooth"
                    ? " underline text-violet-400 "
                    : " text-white"
                }`}
            >
              Photobooth
            </Link>
            <Link
              to="/sugaverse"
              className={` text-xl font-glich cursor-pointer
                ${
                  menu === "sugaverse"
                    ? " underline text-violet-400 "
                    : " text-white"
                }`}
            >
              Sugaverse
            </Link>
            <Link
              to="/hobipalooza"
              className={` text-xl font-rock cursor-pointer
                ${
                  menu === "hobipalooza"
                    ? " underline text-violet-400 "
                    : " text-white"
                }`}
            >
              Hobipalooza
            </Link>
            <Link
              to="/bingo"
              className={`text-xl font-semiboldsans cursor-pointer
                ${
                  menu === "bingo"
                    ? " underline text-violet-400"
                    : " text-white "
                }`}
            >
              Bingo
            </Link>
            <Link
              to="/vpassport"
              className={` font-michroma text-xl cursor-pointer
                ${
                  menu === "vpassport"
                    ? " underline text-violet-400"
                    : "text-white "
                }`}
            >
              Vpassport
            </Link>
            <Link
              to="/hobisback"
              className={` text-xl font-dmmono cursor-pointer ${
                menu === "hobisback"
                  ? " underline text-violet-400 "
                  : " text-white "
              }`}
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
          className={` block text-xl font-bold font-bad cursor-pointer ${
            menu === "menu" ? " underline text-violet-400  " : "  text-white "
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/polaroid"
          className={`  text-xl font-pacific block cursor-pointer ${
            menu === "polaroid" ? " text-violet-400 underline " : " text-white "
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Polaroid
        </Link>
        <Link
          to="/photobooth"
          className={`block text-xl font-playwrite font-bold cursor-pointer${
            menu === "photobooth"
              ? " underline text-violet-400 "
              : " text-white"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Photobooth
        </Link>
        <Link
          to="/sugaverse"
          className={`block text-xl font-glich cursor-pointer ${
            menu === "sugaverse"
              ? " underline text-violet-400  "
              : " text-white "
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Sugaverse
        </Link>
        <Link
          to="/hobipalooza"
          className={`block text-xl font-rock  cursor-pointer ${
            menu === "hobipalooza"
              ? " underline text-violet-400  "
              : " text-white"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Hobipalooza
        </Link>
        <Link
          to="/bingo"
          className={`block text-xl font-semiboldsans font-bold cursor-pointer ${
            menu === "bingo" ? " underline text-violet-400  " : " text-white"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Bingo
        </Link>
        <Link
          to="/vpassport"
          className={` font-michroma text-xl cursor-pointer
            ${
              menu === "vpassport"
                ? " underline text-violet-400"
                : "text-white "
            }`}
          onClick={() => setIsMenuOpen(false)}
        >
          Vpassport
        </Link>
        <Link
          to="/hobisback"
          className={`block text-xl font-dmmono cursor-pointer${
            menu === "hobisback"
              ? " underline text-violet-400  "
              : " text-white "
          }`}
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
