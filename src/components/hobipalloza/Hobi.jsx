import { useState } from "react";
import Formulariohobi from "./hobicomponents/Formulariohobi";
import HomeHobi from "./hobicomponents/HomeHobi";
import TituloC from "./hobicomponents/titulocomponent/TituloC";

export default function Hobi() {
  const [user, setUser] = useState([]);
  const [albu, setAlbu] = useState([]);
  const [song, setSong] = useState([]);

  return (
    <div className=" flex flex-col items-center justify-center">
      {!user.length > 0 ? (
        <Formulariohobi setUser={setUser} setAlbu={setAlbu} setSong={setSong} />
      ) : (
        
        <HomeHobi
          user={user}
          setUser={setUser}
          albu={albu}
          setAlbu={setAlbu}
          song={song}
          setSong={setSong}
        />
      )}
    </div>
  );
}
