/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LinkListHamburguer } from "../components/utils/LinkListHamburguer";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentRoute = LinkListHamburguer.find(
      (route) => route.path === location.pathname
    );
    setMenu(currentRoute ? currentRoute.name : "");
  }, [location.pathname, LinkListHamburguer]);

  return (
    <>
      <div className="absolute block py-2 pl-2 z-10 w-full bg-nav bg-cover bg-no-repeat">
        <div className="flex flex-row items-start justify-start max-sm:justify-start">
          <button
            className="text-white text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776; {/* Unicode character for hamburger icon */}
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute block w-44 h-60 top-10 pt-2 pl-6 backdrop-blur-sm bg-black/90 z-50`}
      >
        {LinkListHamburguer.map(({ path, name, label, font }) => (
          <Link
            key={name}
            to={path}
            className={`block text-xl ${font} cursor-pointer ${
              menu === name ? "underline text-violet-400" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}
