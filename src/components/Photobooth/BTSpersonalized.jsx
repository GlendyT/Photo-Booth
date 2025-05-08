import React from "react";
import { btsPersonalizedBG } from "./btsPersonalizedBG";
import useRequestInfo from "../../hooks/useRequestInfo";
import usePhotobooth from "../../hooks/usePhotobooth";

export const BTSpersonalized = () => {
  const { usuario } = useRequestInfo();
  const {handleSelection} = usePhotobooth()
  const { diseño } = usuario;

  return (
    <div className="py-2 flex flex-col items-center justify-center gap-2 shadow-2xl ">
      {btsPersonalizedBG.map((member) => (
        <label
          key={member.id}
          className={`flex w-full items-center justify-between gap-2 border-none p-1 rounded-md text-violet-100 font-extrabold cursor-pointer bg-purple-800 max-md:text-xs`}
        >
          {member.name}
          <input
            id="diseño"
            name="diseño"
            type="radio"
            value={member.name}
            onChange={handleSelection}
            checked={diseño === member.name}
            className="hidden"
          />
          <span
            className={`w-4 h-4 rounded ${
              diseño === member.name
                ? "ring-4 bg-purple-950"
                : "bg-violet-300 outline-violet-500 outline"
            }`}
          ></span>
        </label>
      ))}
    </div>
  );
};
