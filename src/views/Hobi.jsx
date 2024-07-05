import { useState } from "react";
import Formulariohobi from "../components/hobipalloza/hobicomponents/Formulariohobi";
import HomeHobi from "../components/hobipalloza/hobicomponents/HomeHobi";

export default function Hobi() {
  const [user, setUser] = useState([]);
  const [albu, setAlbu] = useState([]);
  const [song, setSong] = useState([]);

  return (
    <div className=" min-h-screen bg-backhobi2 bg-no-repeat bg-center bg-cover  ">
      <div className="flex flex-col items-center justify-center max-sm:pt-10"> 
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
    </div>
  );
}
