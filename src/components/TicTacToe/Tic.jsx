import useTicTacToe from "../../hooks/useTicTacToe";
import { ResultModal } from "./ResultModal";
import Tic2 from "./Tic2";

const Tic = () => {
  const {
    containerWidth,
    grid,
    humanMove,
    borderClass,
    SQUARE_DIMS,
    PLAYER_X,
    strikeStyles,
    modalOpen,
    winner,
    setModalOpen,
    startNewGame,
    gameState,
    GAME_STATES,
  } = useTicTacToe();

  if (gameState === GAME_STATES.notStarted) {
    return <Tic2 />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="shadow-[0px_1px_6px_18px_rgba(147,_51,_234,_0.5)] border-purple-400 text-center text-white border-2 w-44 text-lg uppercase font-extrabold rounded-t-xl ">
        TIC-TAC-TOE
      </span>
      <div className=" bg-black/50 shadow-[0px_1px_6px_10px_rgba(147,_51,_234,_0.5)] border-purple-400 border-2 p-6 rounded-xl">
        <div
          className="flex flex-wrap justify-center gap-1 relative"
          style={{ width: `${containerWidth}px` }}
        >
          {grid.map((value, index) => {
            const isActive = value !== null;
            return (
              <div
                key={index}
                data-testid={`square_${index}`}
                onClick={() => humanMove(index)}
                className={`${borderClass} text-white flex rounded-xl justify-center items-center hover:cursor-pointer`}
                style={{
                  width: `${SQUARE_DIMS}px`,
                  height: `${SQUARE_DIMS}px`,
                }}
              >
                {isActive && (
                  <p className="text-[68px] select-none">
                    {value === PLAYER_X ? "X" : "O"}
                  </p>
                )}
              </div>
            );
          })}

          <div
            className="absolute bg-red-600"
            style={{
              height: "5px",
              width: Object.keys(strikeStyles).length
                ? strikeStyles.width || "auto"
                : "0px",
              ...strikeStyles,
            }}
          />
          <ResultModal
            isOpen={modalOpen}
            winner={winner}
            close={() => setModalOpen(false)}
            startNewGame={startNewGame}
          />
        </div>
      </div>
    </div>
  );
};

export default Tic;
