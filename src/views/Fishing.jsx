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
      <div className="items-center flex max-sm:mt-8 max-sm:mx-10 mx-44 ">
        <iframe
          title="spotify"
          style={{
            borderRadius: "12px",
          }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9ROcoR0cTZM?utm_source=generator&theme=0"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowtransparency="true"
          loading="lazy"
        ></iframe>
      </div>
      <p className="pb-2 text-lg font-extrabold text-center max-sm:text-xs">
        While you play, do you want to listen to some music?
      </p>
      <div className="flex flex-col gap-6 items-center  ">
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
      <Waves />

      {showModal ? <JinFormulario /> : null}
    </div>
  );
};

export default Fishing;
