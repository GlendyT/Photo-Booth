/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LinkListHamburguer } from "../utils/LinkListHamburguer";

export default function Navbar() {
  const location = useLocation();
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const currentRoute = LinkListHamburguer.find(
      (route) => route.path === location.pathname
    );
    setMenu(currentRoute ? currentRoute.name : "");
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="absolute block z-10">
        <div className="flex flex-row items-start justify-start max-sm:justify-start">
          <button
            className="text-violet-950 text-3xl px-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776; {/* Icono de hamburguesa */}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out bg-black/90 backdrop-blur-sm w-44 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-center items-start pl-4`}
      >
        <button
          className="text-white text-3xl flex items-end justify-end w-full pr-5"
          onClick={handleClose}
        >
          x
        </button>
        {LinkListHamburguer.map(({ path, name, label, font }) => (
          <Link
            key={name}
            to={path}
            className={`block text-xl max-sm:text-base ${font} py-4 cursor-pointer ${
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
