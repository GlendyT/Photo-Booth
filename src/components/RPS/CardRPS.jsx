import useRequestInfo from "../../hooks/useRequestInfo";
import useRPS from "../../hooks/useRPS";
import OptionButton from "./OptionButton";

const CardRPS = () => {
  const {
    result,
    userChoice,
    userMessage,
    userWins,
    maxTurns,
    turns,
    computerWins,
    options,
    computerChoice,
    handlePlay,
    disabled,
    resetAll
  } = useRPS();
  const {usuario} = useRequestInfo()
  const { name, song } = usuario

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="bg-green-500 w-full py-4">
        <div className="flex flex-row items-center justify-center">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              handlePlay={handlePlay}
              disabled={disabled}
              turns={turns}
              maxTurns={maxTurns}
            />
          ))}
        </div>
        <div className="w-full flex flex-col items-center justify-center py-2">
          {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Tie</p>}

          {result > 0 && (
            <p className="text-xl">
              {result === 1 ? "✅ You have won" : "❌ You have lost"}
            </p>
          )}

          <p className="text-xl text-center py-4 flex flex-col items-center justify-center">
            {userMessage && (
              <img
                src={options[userChoice]?.emoji}
                alt="imagenes"
                className={`w-20 rounded-full p-2  ${
                  result === 1
                    ? "bg-green-400"
                    : result === 2
                    ? "bg-red-400"
                    : "bg-blue-400"
                } `}
              />
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 ">
        <p className="text-xl bg-green-500 px-4 ">{name} wins {userWins}</p>
        <p className="text-xl px-4 bg-fuchsia-800 ">
          Turns Left {maxTurns - turns}
        </p>
        <p className="text-xl bg-blue-500 px-4">{song} wins {computerWins}</p>
      </div>

      <div className="bg-blue-500 w-full flex flex-col items-center justify-center py-4">
        <p className="text-xl text-center py-4 flex flex-col items-center justify-center ">
          {userMessage && (
            <img
              src={options[computerChoice]?.emoji}
              alt="rockpapersiccors"
              className={`w-20 rounded-full p-2  ${
                result === 2
                  ? "bg-green-400"
                  : result === 1
                  ? "bg-red-400"
                  : "bg-blue-400"
              } `}
            />
          )}
        </p>
        {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Tie</p>}
        {result > 0 && (
          <p className="text-xl">
            {result === 2 ? "✅ You have won" : "❌ You have lost"}
          </p>
        )}

        <div className="flex flex-row items-center justify-center">
          {options.map((option) => (
            <div
              key={option.id}
              className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full  focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={option.emoji} alt="rockpapersiccors2" className="w-20" />
            </div>
          ))}
        </div>
      </div>

      {turns === maxTurns && (
        <button
          className={`bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700`}
          onClick={resetAll}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default CardRPS;
