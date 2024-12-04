export default function List({ diseño, usuarioGenerado }) {
  return (
    <div>
      <div className="my-5">
        <label className="text-sm mb-2 text-white">Design</label>

        <select
          id="diseno"
          name="diseño"
          value={diseño}
          placeholder="Select Your ArtWork"
          onChange={usuarioGenerado}
          className="shadow border rounded w-full py-2 px-3 text-gray-700  "
        >
          <option value="">Select your artwork </option>
          <option value="dday">D-Day</option>
          <option value="d2">D-2</option>
          <option value="agustd">Agust D</option>
          <option value="pp2">People Pt2</option>
          <option value="hgm">Haegum</option>
          <option value="yc">Yoongi Special Collage</option>
        </select>
      </div>
    </div>
  );
}
