import Card from "../components/Virthday/Card";
import { VForm } from "../components/Virthday/VForm";
import useFlip from "../hooks/useFlip";

const Memorygame = () => {
  const { items, timer, timeExpired, handleStartGame } = useFlip();

  return (
    <div className="min-h-screen bg-v2 bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col gap-2 items-center justify-center min-h-screen ">
        <div className="text-2xl font-bold text-black font-virthday flex flex-row justify-between items-center gap-2">
          Memory Game{" "}
          <button
            onClick={handleStartGame}
            className="bg-black text-white px-2 py-2 rounded-full text-lg"
          >
            {" "}
            START
          </button>
          <span className="bg-black text-white py-2 px-4 flex flex-col items-center text-xs">
            Time Left<span className="text-2xl">{timer}</span>
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
