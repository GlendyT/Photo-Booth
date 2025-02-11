import useRequestInfo from "../../hooks/useRequestInfo";
export default function ListV() {
  const { usuario, usuarioGenerado } = useRequestInfo();
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

          <select
            id="diseno"
            name="diseño"
            value={diseño}
            onChange={usuarioGenerado}
            className="shadow border rounded w-full py-2 px-3 text-gray-700  "
          >
            <option value="">Select your artwork </option>
            <option value="btsflower">BTS</option>
            <option value="rmflower">Nam</option>
            <option value="jinflower">Jin</option>
            <option value="sugaflower">Yoongi</option>
            <option value="jhopeflower">Hobi</option>
            <option value="jiminflower">Jimin</option>
            <option value="vflower">V</option>
            <option value="jungkookflower">JK</option>
          </select>
        </div>
      </div>
    </div>
  );
}

//TODO: el value del option debe ser igual al btsImg de data.js, para que se pueda mostrar la imagen en el card