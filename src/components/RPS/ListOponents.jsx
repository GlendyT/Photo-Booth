import useRequestInfo from "../../hooks/useRequestInfo";
import { membersBts } from "../ValentinDay/data";

export default function ListOponents() {
  const { usuario, usuarioGenerado } = useRequestInfo();
  const { song } = usuario;

  return (
    <div>
      <div className="my-5">
        <label className="text-sm mb-2 text-white">Design</label>

        <div className=" flex flex-col gap-2 items-center justify-center "> 
          <select
            id="diseno"
            name="song"
            value={song}
            onChange={usuarioGenerado}
          >
            <option
              value=""
              className="text-2xl font-providence font-bold text-purple-800 border border-purple-900"
            >
              {" "}
              Choose your oponent{" "}
            </option>
            {membersBts.map((members) => (
              <option key={members.name} value={members.name}>
                {" "}
                {members.name}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
