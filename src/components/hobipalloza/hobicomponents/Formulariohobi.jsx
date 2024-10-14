import { useState } from "react";
import { Filtroalbum } from "./FiltroAlbum";
import { rolas } from "../data/data";
import hw from "../assetsPalooza/hw.avif";

export default function Formulariohobi({ setUser, setAlbu, setSong }) {
  const [nombre, setNombre] = useState("");
  const [album, setAlbum] = useState("");
  const [cancion, setCancion] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || album === "" || cancion === "") {
      setError(true);
      return;
    }
    setError(false);

    setUser([nombre]);
    setAlbu([album]);
    setSong([cancion]);
  };
  return (
    <div className=" relative flex flex-col sm:justify-center items-center text-white max-sm:text-xs mt-14">
      <div className=" sm:max-w-sm w-full">
        <img src={hw} typeof="image/png" alt="Titulo" className="pic" />
        <div className=" px-10 py-4">
          <form
            className="mt-5 flex flex-col gap-4 text-black"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Use your Twitter/X @username"
              className="rounded py-2  text-center"
            />

            <Filtroalbum album={album} setAlbum={setAlbum} />

            <select
              onChange={(e) => setCancion(e.target.value)}
              value={cancion}
              className="rounded py-2  text-center"
            >
              <option value="">Choose Your favorite Song</option>
              {rolas.map((nombre) => (
                <option key={nombre.nombre} value={nombre.nombre}>
                  {nombre.nombre}
                </option>
              ))}
            </select>

            <button className="bg-pink-600 py-4 text-white rounded-lg uppercase font-bold hover:bg-black hover:text-[#5abecd] transition-all">
              {" "}
              Generate Card
            </button>
          </form>
        </div>

        {error && <p className="error text-center text-red-500 font-extrabold">All questions must be filled out</p>}
      </div>
    </div>
  );
}
