import { HangmanDrawing } from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

export const Fish = () => {
  return (
    <div className=" flex flex-col items-center m-auto gap-6 relative z-10 ">
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
};
