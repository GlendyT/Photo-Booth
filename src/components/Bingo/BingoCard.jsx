
import Confetti from "react-dom-confetti";

export default function BingoCard({ item,isClicked, handleClick}) {

  return (
    <>
      <div
        className={` border-black border-2 px-2 py-4 max-sm:px-2 max-sm:py-2 cursor-grabbing ${
          isClicked === true
            ? "bg-purple-200 text-purple-900 font-semibold"
            : "bg-white-700"
        }`}
        onClick={handleClick}

      >
        <p className="text-xs max-sm:text-[0.6rem]">{item.name}</p>
        <Confetti
          active={isClicked}
          config={{ spread: 70, startVelocity: 30, elementCount: 50 }}
        />
      </div>
    </>
  );
}
