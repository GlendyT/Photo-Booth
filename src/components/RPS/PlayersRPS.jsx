const ResultDisplay = ({ bgColor, title, wins }) => {
  return (
    <div
      className={`text-lg max-md:text-sm w-full py-3 flex flex-col font-fuzzybubbles ${bgColor}`}
    >
      <p>{title}</p>
      <p>wins {wins}</p>
    </div>
  );
};

export const UserRPS = ({ result, userWins, name }) => {
  const userBgColor =
    result === 1 ? "bg-green-400" : result === 2 ? "bg-red-400" : "bg-blue-400";

  return <ResultDisplay bgColor={userBgColor} title={name} wins={userWins} />;
};

export const ResultRPS = ({ maxTurns, turns }) => {
  return (
    <div className="flex flex-col w-full text-purple-800 font-extrabold text-lg max-md:text-sm font-fuzzybubbles ">
      {maxTurns - turns === 0 ? (
        <p>Game-Over</p>
      ) : (
        <p>Turns left {maxTurns - turns}</p>
      )}
    </div>
  );
};

export const BtsRPS = ({ result, song, computerWins }) => {
  const btsBgColor =
    result === 2 ? "bg-green-400" : result === 1 ? "bg-red-400" : "bg-blue-400";

  return (
    <ResultDisplay bgColor={btsBgColor} title={song} wins={computerWins} />
  );
};
