import useTicTacToe from "../../hooks/useTicTacToe";
import { ResultModal } from "./ResultModal";

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
    changeMode,
    mode,
    GAME_MODES,
    choosePlayer,
    PLAYER_0,
  } = useTicTacToe();

  if (gameState === GAME_STATES.notStarted) {
    return (
      <div>
        <div className="flex flex-col items-center mb-8">
          <p className="mb-2">Select difficulty</p>
          <div className="flex flex-row gap-2">
            {Object.keys(GAME_MODES).map((key) => {
              const gameMode = GAME_MODES[key];
              return (
                <label
                  key={gameMode}
                  className="flex items-center gap-2 bg-blue-400 px-2 rounded-md capitalize"
                >
                  <input
                    type="radio"
                    name="gameMode"
                    value={gameMode}
                    checked={mode === gameMode}
                    onChange={changeMode}
                    className="hidden"
                  />
                  {key}
                  <span
                    className={`w-4 h-4 rounded ${
                      mode === gameMode
                        ? "ring-4 bg-blue-950"
                        : "bg-blue-300 outline-blue-500 outline"
                    }`}
                  ></span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center mb-8">
          <p className="mb-2">Choose your player</p>
          <div className="flex w-[150px] justify-between items-center">
            <button
              onClick={() => choosePlayer(PLAYER_X)}
              className="border border-gray-300 rounded px-4 py-1 hover:bg-gray-100"
            >
              X
            </button>
            <p>or</p>
            <button
              onClick={() => choosePlayer(PLAYER_0)}
              className="border border-gray-300 rounded px-4 py-1 hover:bg-gray-100"
            >
              O
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-wrap justify-center relative"
      style={{ width: `${containerWidth}px` }}
    >
      {grid.map((value, index) => {
        const isActive = value !== null;
        return (
          <div
            key={index}
            data-testid={`square_${index}`}
            onClick={() => humanMove(index)}
            className={`${borderClass} flex justify-center items-center hover:cursor-pointer`}
            style={{ width: `${SQUARE_DIMS}px`, height: `${SQUARE_DIMS}px` }}
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
  );
};

export default Tic;
