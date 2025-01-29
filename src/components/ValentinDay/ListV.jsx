import useRequestInfo from "../../hooks/useRequestInfo";
import { membersBts } from "./data";

export default function ListV() {
  const { usuario, usuarioGenerado1 } = useRequestInfo();
  const { diseño } = usuario;

  return (
    <div>
      <div className="my-5">
        <label className="text-sm mb-2 text-white">Design</label>

        {/* <select
          id="diseno"
          name="diseño"
          value={diseño}
          placeholder="Select Your ArtWork"
          onChange={usuarioGenerado}
          className="shadow border rounded w-full py-2 px-3 text-gray-700  "
        >
        </select> */}

        <div className=" flex flex-col gap-2 items-center justify-center "> 
              <label htmlFor='membersBts' className=' text-purple-700 font-bold mb-2'>
                 Make a choice :
              </label>

          <select
            id="diseno"
            name="diseño"
            value={diseño}
            onChange={usuarioGenerado1}
          >
            <option
              value=""
              className="text-2xl font-providence font-bold text-purple-800 border border-purple-900"
            >
              {" "}
              Pick a member or the group{" "}
            </option>
            {membersBts.map((members) => (
              <option key={members.id} value={members.id}>
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
