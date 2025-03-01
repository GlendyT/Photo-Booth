import jin from "../assets/jin_fishing.webp";
import fish1 from "../assets/jin_winner.webp";
import loser from "../assets/jin_loser.webp";
import useFish from "../../../hooks/useFishing";
import Confetti from "react-dom-confetti";
import { CardModalAccess } from "./CardModalAccess";

const VerticalLine = () => {
  return (
    <div className="w-[0.3em] h-10 bg-blue-950 mx-10 max-sm:mx-8 max-xl:mx-16 max-sm:w-[0.2rem] max-sm:h-2" />
  );
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
        alt="jinfishing"
        className={` h-[26em] max-xl:h-[42em] max-sm:w-auto max-sm:h-64 transition-all duration-500 ease-in-out transform ${
          isWinner ? "" : "w-96" ? "" : "w-80"
        }`}
      />
      <div className="absolute right-0 top-52 max-sm:top-32 max-xl:top-80 flex flex-col items-center">
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