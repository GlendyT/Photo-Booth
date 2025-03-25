export default function OptionButton({
  option,
  handlePlay,
  disabled,
  turns,
  maxTurns,
}) {
  return (
    <button
      className={`px-4 py-2 m-2 text-xl font-bold text-white bg-purple-400 rounded-full  
        hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-gray-400 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-400`}
      disabled={disabled || turns >= maxTurns}
      onClick={() => handlePlay(option.id)}
      title={option.name}
    >
      <img src={option.emoji} alt="rockpapersiccors4" className="w-20 max-md:w-10" />
    </button>
  );
}
