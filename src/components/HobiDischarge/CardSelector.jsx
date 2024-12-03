import React from "react";
import useRequestInfo from "../../hooks/useRequestInfo";

export const CardSelector = ({ ver1, ver2 }) => {
  const { usuario, usuarioGenerado } = useRequestInfo();
  const { diseño } = usuario;
  return (
    <div className="flex flex-col text-black font-extrabold">
      <label className="pt-4 text-center">Select your Card</label>
      <div className="py-2 flex gap-2 max-sm:text-xs ">
        <label className="px-4 py-2 flex gap-4 cursor-pointer items-center">
          <input
            id="diseño"
            name="diseño"
            type="radio"
            value={ver1}
            checked={diseño === ver1}
            onChange={usuarioGenerado}
            className="hidden"
          />
          <span
            className={`w-8 h-6 rounded ${
              diseño === ver1
                ? "ring-4 bg-black"
                : "bg-gray-400 outline-gray-600 outline"
            }`}
          ></span>
          Cute Version
        </label>

        <label className="px-4 py-2 flex gap-4 cursor-pointer items-center">
          <input
            id="diseño"
            name="diseño"
            type="radio"
            value={ver2}
            checked={diseño === ver2}
            onChange={usuarioGenerado}
            className="hidden"
          />
          <span
            className={`w-8 h-6  rounded ${
              diseño === ver2
                ? "ring-4 bg-black"
                : "bg-gray-400 outline-gray-600 outline"
            }`}
          ></span>
          Boyfriend Version
        </label>
      </div>
    </div>
  );
};
