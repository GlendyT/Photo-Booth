import { Filtroalbum } from "./FiltroAlbum";
import { rolas } from "../data/data";
import hw from "../assetsPalooza/hw.avif";
import useRequestInfo from "../../../hooks/useRequestInfo";
import { ButtonUtils } from "../../../utils/ButtonUtils";

export default function Formulariohobi() {
  const {
    usuario,
    usuarioGenerado,
    handleSubmit,
    maxFromLimit,
    handleNameH,
    error,
    isMaxFromLimitReachedH,
    charCountFrom,
  } = useRequestInfo();
  const { name, album, song } = usuario;
  return (
    <div className="   text-white max-sm:text-xs w-96">
      <img src={hw} typeof="image/png" alt="hobipalooza" className="pic" />
      <div className=" mx-10">
        <form
          className="mt-5 flex flex-col gap-4 text-black"
          onSubmit={handleSubmit}
        >
          <div
            className={`text-sm float-end text-end font-extrabold ${
              isMaxFromLimitReachedH ? "text-red-500 " : "text-[#31c4bd]"
            }`}
          >
            {isMaxFromLimitReachedH && (
              <span className="text-red-500">Too long!</span>
            )}{" "}
            {charCountFrom}/15
          </div>
          <input
            maxLength={maxFromLimit}
            value={name}
            id="name"
            name="name"
            onChange={handleNameH}
            placeholder="Use your Twitter/X @username"
            className="rounded py-2  text-center"
          />

          <Filtroalbum album={album} usuarioGenerado={usuarioGenerado} />

          <select
            id="song"
            name="song"
            value={song}
            onChange={usuarioGenerado}
            className="rounded py-2  text-center"
          >
            <option value="">Choose Your favorite Song</option>
            {rolas.map((nombre) => (
              <option key={nombre.nombre} value={nombre.nombre}>
                {nombre.nombre}
              </option>
            ))}
          </select>
          <ButtonUtils
            label="Generate Card"
            className=" mt-4   max-sm:mt-2"
            bgColor="bg-pink-600"
            textColor="text-white"
            font=" uppercase"
            disabled={!song}
            disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
          />
        </form>
      </div>

      {error && (
        <p className="error text-center text-red-500 font-extrabold">
          All questions must be filled out
        </p>
      )}
    </div>
  );
}
