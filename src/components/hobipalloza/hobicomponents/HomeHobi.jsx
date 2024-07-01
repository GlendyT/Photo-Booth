
import Botones from "./botones/Botones";
import TicketComponent from "./ticketcomponent/TicketComponent";
import TituloC from "./titulocomponent/TituloC";
import useDownload from "../../../hooks/useDownload";

export default function HomeHobi({ user, setUser, albu, song }) {
  const { handleDownloadImage } = useDownload()


  const handleLogout = () => {
    setUser({});
  };
  return (
    <>
      <TituloC />
      <p className="bg-black text-white uppercase font-bold text-center max-sm:text-xs">
        Don´t forget to scan your QR code for a surprise!
      </p>
      <p className="bg-black text-white uppercase font-bold mb-4 text-center max-sm:text-xs">
        Here is your ticket, keep supporting j-hope´s work!
      </p>

      <TicketComponent
        user={user}
        albu={albu}
        song={song}
      />

      <Botones
        handleDownloadImage={handleDownloadImage}
        handleLogout={handleLogout}
      />
    </>
  );
}
