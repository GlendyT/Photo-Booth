export const ResultModal = ({ isOpen, close, startNewGame, winner }) => {
  if (!isOpen) return null;

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50"
      onClick={close} //Cerrar modal al hacer clic en el overlay
    >
      {/* Evitar cierre al hacer clic dentro del modal */}
      <div
        className="relative w-[320px] mt-24 bg-white p-5 border border-gray-300 rounded flex flex-col outline-none max-h-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-2xl font-bold uppercase mb-5 flex items-center">
          Game over
        </p>
        <p className="flex-1 text-center">{winner}</p>

        <div className="flex justify-between w-full mt-5">
          <button className="text-base" onClick={startNewGame}>
            Start over
          </button>
        </div>
      </div>
    </div>
  );
};
