import TicketComponent from "./ticketcomponent/TicketComponent";
import TituloC from "./titulocomponent/TituloC";

export default function HomeHobi({ user, setUser, albu, song }) {
  return (
    <>
      <TituloC />
      <p className="bg-black text-white uppercase font-bold text-center">
        Don´t forget to scan your QR code for a surprise!
      </p>
      <p className="bg-black text-white uppercase font-bold mb-4 text-center">
        Here is your ticket, keep supporting j-hope´s work!
      </p>
      <TicketComponent user={user} albu={albu} song={song} />

    </>
  );
}
