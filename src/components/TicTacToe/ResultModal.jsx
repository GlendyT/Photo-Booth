import { ButtonUtils } from "../../utils/ButtonUtils";

export const ResultModal = ({ isOpen, close, startNewGame, winner }) => {
  if (!isOpen) return null;

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={close} //Cerrar modal al hacer clic en el overlay
    >
      {/* Evitar cierre al hacer clic dentro del modal */}
      <div
        className="relative w-80 h-96 bg-white p-5 border border-gray-300 rounded flex flex-col outline-none items-center justify-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-2xl font-bold uppercase flex items-center">
          Game over
        </p>
        <p className="flex-1 text-center">{winner}</p>

        <ButtonUtils
          className="text-base text-white px-1 py-1 rounded-sm"
          onClick={startNewGame}
          label="Start Over"
          bgColor="bg-black"
        />
      </div>
    </div>
  );
};
