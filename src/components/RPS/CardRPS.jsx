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
    reset,
    handlePlay,
    disabled,
  } = useRPS();
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
            />
          ))}
        </div>
        <p className="text-xl text-center ">
          <img src={userMessage} alt="imagenes" className="w-20" />
        </p>
      </div>
      <div className="flex flex-row gap-4 ">
        <p className="text-xl bg-green-500 px-4 ">user wins {userWins}</p>
        <p className="text-xl px-4">Turns Left {maxTurns - turns}</p>
        <p className="text-xl bg-blue-500 px-4">computer wins {computerWins}</p>
      </div>

      <div className="bg-blue-500 w-full py-4">
        <p className="text-xl text-center ">
          <img src={userMessage} alt="imagenes" className="w-20" />
        </p>
        <div className="flex flex-row items-center justify-center">
          {options.map((option) => (
            <div
              key={option.id}
              className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full  focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src={option.emoji} alt="imagenes" className="w-20" />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Empate</p>}
        {result === 1 && (
          <p className="text-xl ">
            ✅ Has ganado con {options[userChoice]?.name} contra{" "}
            {options[computerChoice]?.name}
          </p>
        )}
        {result === 2 && (
          <p className="text-xl">
            ❌ Has perdido con {options[userChoice]?.name} contra{" "}
            {options[computerChoice]?.name}
          </p>
        )}
      </div>

      {turns === maxTurns && (
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
          onClick={reset}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default CardRPS;
