import Card from "../components/Virthday/Card";
import { VForm } from "../components/Virthday/VForm";
import useFlip from "../hooks/useFlip";
import { ButtonUtils } from "../utils/ButtonUtils";

const Memorygame = () => {
  const { items, timer, timeExpired, handleStartGame } = useFlip();

  return (
    <div className="min-h-screen bg-v2 bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col gap-2 items-center justify-center min-h-screen ">
        <div className="text-2xl font-bold text-black font-virthday flex flex-row justify-between items-center gap-2">
          Memory Game{" "}
          <ButtonUtils
           label="START"
           onClick={handleStartGame}
           bgColor="bg-black text-white rounded-full text-lg "
           disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
           disabled={timer === 60 ? false : true}
          />
          <span
            className={`py-2 px-4 flex flex-col items-center text-xs text-white transition-colors rounded-lg  ${
              timer === 60
                ? "bg-black" 
                : timer > 30
                ? "bg-green-500" 
                : timer > 10
                ? "bg-yellow-500"
                : "bg-red-500" 
            }`}
          >
            {timer === 60 ? "Time" : timer > 0 ? "Time left" : "Time's up"}
            <span className="text-2xl">{timer !== null ? timer : "..."}</span>
          </span>
        </div>

        <div className="bg-white grid grid-cols-4 items-center justify-center gap-1 p-2 border-black border-4">
          {items.map((item) => (
            <Card key={item.id2} item={item} />
          ))}
        </div>

        {timeExpired && (
          <div className="flex flex-col items-center gap-4">
            <VForm />
          </div>
        )}

        <div className="w-96">
          <iframe
            title="Spotify Playlist"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5Ku5zxR5pFB?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Memorygame;