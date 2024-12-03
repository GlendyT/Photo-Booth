import { HangmanDrawing } from "../components/FishingKSJ/Fishing/HangmanDrawing";
import HangmanWord from "../components/FishingKSJ/Fishing/HangmanWord";
import { JinFormulario } from "../components/FishingKSJ/Fishing/JinFormulario";
import Keyboard from "../components/FishingKSJ/Fishing/Keyboard";
import Waves from "../components/FishingKSJ/waves/Waves";
import useFish from "../hooks/useFishing";

const Fishing = () => {
  const { showModal } = useFish();
  return (
    <div className="bg-[#2b74ce] flex flex-col min-h-screen font-PressGame relative ">
      <div
        className={`flex flex-col  items-center justify-center m-auto relative z-10 max-sm:mt-9 `}
      >
        <iframe
          title="spotify"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9ROcoR0cTZM?utm_source=generator&theme=0"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowtransparency="true"
          loading="lazy"
        ></iframe>
        <p className="pb-6 text-lg font-extrabold text-center max-sm:text-[0.5rem]">
          While you play, do you want to listen to some music?
        </p>

        <div className="flex flex-col gap-4 justify-center items-center">
          <HangmanDrawing />
          <HangmanWord />
          <Keyboard />
        </div>
      </div>
      {showModal ? <JinFormulario /> : null}

      <Waves />
    </div>
  );
};

export default Fishing;
