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
    }
  }, [location.pathname]);

  return (
    <>
      <div className="w-full p-4 text-black gap-2 bg-backmain bg-cover bg-no-repeat">
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
                  ? "text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl"
              }
            >
              Home
            </Link>
            <Link
              to="/polaroid"
              className={
                menu === "polaroid"
                  ? "text-xl font-bold py-1 px-2 text-purple-400 underline rounded-xl"
                  : "cursor-pointer text-white text-xl"
              }
            >
              Polaroid
            </Link>
            <Link
              to="/photobooth"
              className={
                menu === "photobooth"
                  ? "text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl"
              }
            >
              Photobooth
            </Link>
            <Link
              to="/sugaverse"
              className={
                menu === "sugaverse"
                  ? "text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl"
              }
            >
              Sugaverse
            </Link>
            <Link
              to="/hobipalooza"
              className={
                menu === "hobipalooza"
                  ? "text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl"
              }
            >
              Hobipalooza
            </Link>
            <Link
              to="/rain"
              className={
                menu === "rain"
                  ? "text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
                  : "cursor-pointer text-white text-xl"
              }
            >
              Rain
            </Link>
          </div>
        
        </div>
      </div>
      
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute block w-44 h-44 left-4 backdrop-blur-md z-10 `}
      >
        <Link
          to="/"
          className={
            menu === "menu"
              ? "block text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
              : "block cursor-pointer text-white text-xl"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/polaroid"
          className={
            menu === "polaroid"
              ? "block text-xl font-bold py-1 px-2 text-purple-400 underline rounded-xl"
              : "block cursor-pointer text-white text-xl"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Polaroid
        </Link>
        <Link
          to="/photobooth"
          className={
            menu === "photobooth"
              ? "block text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
              : "block cursor-pointer text-white text-xl"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Photobooth
        </Link>
        <Link
          to="/sugaverse"
          className={
            menu === "sugaverse"
              ? "block text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
              : "block cursor-pointer text-white text-xl"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Sugaverse
        </Link>
        <Link
          to="/hobipalooza"
          className={
            menu === "hobipalooza"
              ? "block text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
              : "block cursor-pointer text-white text-xl"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Hobipalooza
        </Link>
        <Link
          to="/rain"
          className={
            menu === "rain"
              ? "block text-xl font-bold py-1 px-2 underline text-purple-400 cursor-pointer rounded-xl"
              : "block cursor-pointer text-white text-xl"
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Rain
        </Link>
      </div>
      <Outlet />
    </>
  );
}
