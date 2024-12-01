import { HangmanDrawing } from "../components/FishingKSJ/Fishing/HangmanDrawing";
import HangmanWord from "../components/FishingKSJ/Fishing/HangmanWord";
import Keyboard from "../components/FishingKSJ/Fishing/Keyboard";
import useFish from "../hooks/useFishing";
import Waves from "../components/FishingKSJ/waves/Waves";

const Fishing = () => {
  const { isLoser, isWinner, handleStartOver } = useFish();

  return (
    <div className="bg-[#2b74ce] flex flex-col min-h-screen ">
      <div className="flex flex-col  items-center justify-center m-auto relative z-10 max-sm:mt-6 ">
        <iframe
          title="spotify"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9ROcoR0cTZM?utm_source=generator&theme=0"
          width="70%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowtransparency="true"
          loading="lazy"
        ></iframe>
        <p className="pb-6 text-2xl font-extrabold text-center max-sm:text-base">
          While you play, do you want to listen to some music?
        </p>
        <div className="flex flex-col gap-4 justify-center items-center">
          <HangmanDrawing />
          <HangmanWord />
          <Keyboard />
        </div>
        <div className="flex items-center pt-2">
          <button
            onClick={handleStartOver}
            className={` ${
              isWinner || isLoser
                ? "px-4 py-2 bg-black text-white rounded-xl hover:bg-slate-500 hover:text-black transition-all"
                : ""
            }`}
          >
            {isWinner || isLoser ? "Play again" : ""}
          </button>
        </div>
      </div>

      <Waves />
    </div>
  );
};

export default Fishing;
