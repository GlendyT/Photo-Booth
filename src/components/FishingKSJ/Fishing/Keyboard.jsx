import useFish from "../../../hooks/useFishing";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function Keyboard() {
  const {
    handleClick,
    pressedLetter,
    activeLetters,
    disabled,
    inactiveLetters,
  } = useFish();

  return (
    <div className="flex items-center justify-center gap-1 text-xs max-sm:px-4 ">
      <div className="flex flex-wrap items-center justify-center gap-2 max-sm:gap-1 max-sm:flex-wrap">
        {KEYS.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          const isPressed = pressedLetter === key;

          let buttonClass =
            " border-2 py-1 px-2 text-lg max-sm:text-[7px] uppercase font-bold cursor-grab text-black ";

          if (isActive) {
            buttonClass += "bg-purple-600 text-white cursor-not-allowed";
          } else if (isInactive) {
            buttonClass += "bg-red-400 cursor-not-allowed";
          } else if (isPressed) {
            buttonClass += "bg-red-500 text-white";
          } else {
            buttonClass += "bg-blue-500";
          }

          return (
            <button
              onClick={() => handleClick(key)}
              className={buttonClass}
              key={key}
              disabled={isActive || isInactive || disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
