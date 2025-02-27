import { HangmanDrawing } from "../components/FishingKSJ/Fishing/HangmanDrawing";
import HangmanWord from "../components/FishingKSJ/Fishing/HangmanWord";
import { JinFormulario } from "../components/FishingKSJ/Fishing/JinFormulario";
import Keyboard from "../components/FishingKSJ/Fishing/Keyboard";
import Waves from "../components/FishingKSJ/waves/Waves";
import useFish from "../hooks/useFishing";

const Fishing = () => {
  const { showModal } = useFish();
  return (
    <div className="bg-[#2b74ce] flex flex-col min-h-screen font-PressGame justify-center ">
      <p className=" text-lg font-extrabold text-center max-sm:text-xs pt-8">
        Let´s fish some music?
      </p>
      <div className="flex flex-col gap-6 items-center  ">
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>

      {showModal ? <JinFormulario /> : null}
      <Waves />
    </div>
  );
};

export default Fishing;
