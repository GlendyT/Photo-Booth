const ResultIcon = ({ result, isUser }) => {
  if (result === 0) return <p className="text-6xl max-md:text-4xl">🟰</p>;
  if (result > 0) {
    return (
      <p className="text-6xl max-md:text-4xl">
        {(isUser ? result === 1 : result === 2) ? "✅" : "❌"}
      </p>
    );
  }
  return null; // No mostrar nada si no hay resultado
};

const EmojiDisplay = ({ emoji, bgColor }) => (
  <img src={emoji} alt="emoji" className={`w-20 max-md:w-14 rounded-full p-2 ${bgColor}`} />
);

export const UserImgRPS = ({ result, userMessage, options, userChoice }) => {
  const userBgColor =
    result === 1
      ? "border-4 border-green-400"
      : result === 2
      ? "border-4 border-red-400"
      : "border-4 border-blue-400";

  return (
    <div className="w-full flex flex-row items-center justify-center py-2">
      <ResultIcon result={result} isUser={true} />
      <p className="text-xl text-center py-4 flex flex-col items-center justify-center">
        {userMessage && (
          <EmojiDisplay
            emoji={options[userChoice]?.emoji}
            bgColor={userBgColor}
          />
        )}
      </p>
      <ResultIcon result={result} isUser={true} />
    </div>
  );
};

export const BtsImgRPS = ({ result, userMessage, options, computerChoice }) => {
  const btsBgColor =
    result === 2
      ? "border-4 border-green-400"
      : result === 1
      ? "border-4 border-red-400"
      : "border-4 border-blue-400";

  return (
    <div
      className={`w-full  bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center py-4 cursor-not-allowed rounded-b-xl ${btsBgColor}`}
    >
      <div className="w-full flex flex-row items-center justify-center">
        <ResultIcon result={result} isUser={false} />
        <p className="text-xl text-center py-4 flex flex-col items-center justify-center">
          {userMessage && (
            <EmojiDisplay
              emoji={options[computerChoice]?.emoji}
              bgColor={btsBgColor}
            />
          )}
        </p>
        <ResultIcon result={result} isUser={false} />
      </div>
      <div className="flex flex-row items-center justify-center">
        {options.map((option) => (
          <div
            key={option.id}
            className="px-4 py-2 m-2 text-xl text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src={option.emoji} alt="option" className="w-20 max-md:w-10" />
          </div>
        ))}
      </div>
    </div>
  );
};
