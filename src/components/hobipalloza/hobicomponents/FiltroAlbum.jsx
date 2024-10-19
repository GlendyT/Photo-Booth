export const Filtroalbum = ({ album, usuarioGenerado }) => {
  return (
    <select
      id="album"
      name="album"
      value={album}
      onChange={usuarioGenerado}
      className="rounded py-2  text-center"
    >
      <option value="">Choose Your Favorite Album</option>
      <option value="HopeWorld">Hope World</option>
      <option value="JackInTheBox">Jack In The Box</option>
      <option value="JackInTheBoxHOPEEdition">
        Jack In The Box (HOPE Edition)
      </option>
    </select>
  );
};
