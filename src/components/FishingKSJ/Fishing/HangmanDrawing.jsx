import jin from "../assets/fishing.webp";
import fish1 from "../assets/fished.webp";
import loser from "../assets/loser.webp";
import useFish from "../../../hooks/useFishing";
import Confetti from "react-dom-confetti";
import { CardModalAccess } from "./CardModalAccess";

const VerticalLine = () => {
  return <div className="w-[0.3em] h-7 bg-black -mx-0" />;
};

export const HangmanDrawing = () => {
  const { isWinner, isLoser, correctGuessCount } = useFish();
  return (
    <div className="relative inline-block">
      <Confetti
        active={isWinner}
        config={{ spread: 120, startVelocity: 10, elementCount: 50 }}
      />

      <img
        src={isWinner ? fish1 : isLoser ? loser : jin}
        alt={isWinner ? "Winner" : isLoser ? "Loser" : "Jin"}
        className={` h-72 max-sm:w-44 max-sm:h-40 transition-all duration-500 ease-in-out transform ${
          isWinner ? "" : "w-72" ? "" : "w-80"
        }`}
      />
      <div className="absolute right-0 top-28 flex flex-col items-center">
        {!isWinner &&
          !isLoser &&
          Array.from({ length: correctGuessCount }).map((_, index) => (
            <VerticalLine key={index} />
          ))}
      </div>

      <CardModalAccess />
    </div>
  );
};
