import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState("");

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
      <header className="w-full p-4 text-black flex flex-row items-center justify-center gap-2">
      <Link
          to="/"
          className={
            menu === "menu"
              ? " text-xl font-bold py-1 px-2 shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white cursor-pointer bg-white rounded-xl"
              : "cursor-pointer text-white "
          }
        >
          Home
        </Link>
        <Link
          to="/polaroid"
          className={
            menu === "polaroid"
              ? "text-xl font-bold py-1 px-2 shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white  cursor-pointer  bg-white rounded-xl"
              : "cursor-pointer text-white"
          }
        >
          Polaroid
        </Link>
        <Link
          to="/photobooth"
          className={
            menu === "photobooth"
              ? " text-xl font-bold py-1 px-2 shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white cursor-pointer  bg-white rounded-xl"
              : "cursor-pointer text-white"
          }
        >
          Photobooth
        </Link>
        <Link
          to="/sugaverse"
          className={
            menu === "sugaverse"
              ? " text-xl font-bold py-1 px-2 shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white cursor-pointer  bg-white rounded-xl"
              : "cursor-pointer text-white"
          }
        >
          Sugaverse
        </Link>
        <Link
          to="/hobipalooza"
          className={
            menu === "hobipalooza"
              ? " text-xl font-bold py-1 px-2 shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white cursor-pointer  bg-white rounded-xl"
              : "cursor-pointer text-white"
          }
        >
          Hobipalooza
        </Link>
        <Link
          to="/rain"
          className={
            menu === "rain"
              ? " text-xl font-bold py-1 px-2 shadow-[inset_0px_0px_33px_6px_#3c366b,0px_3px_47px_0px_#553c9a] bg-clip-text bg-gradient-to-bl from-purple-700 via-purple-800 to-blue-900 transition-colors text-white cursor-pointer  bg-white rounded-xl"
              : "cursor-pointer text-white"
          }
        >
          Rain
        </Link>
      </header>

      <Outlet />
    </>
  );
}

