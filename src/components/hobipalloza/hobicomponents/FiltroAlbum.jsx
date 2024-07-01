export const Filtroalbum = ({ album, setAlbum }) => {
  return (
    <select
      value={album}
      onChange={(e) => setAlbum(e.target.value)}
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
