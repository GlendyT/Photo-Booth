import { Fish } from "../components/FishingKSJ/Fishing/Fish";
import { JinFormulario } from "../components/FishingKSJ/Fishing/JinFormulario";

import Waves from "../components/FishingKSJ/waves/Waves";
import { SpotifyPlaylist } from "../components/utils/SpotifyPlaylist";
import useFish from "../hooks/useFishing";

const Fishing = () => {
  const { showModal } = useFish();
  return (
    <div className="bg-[#2b74ce] flex flex-col min-h-screen font-PressGame  ">
      <SpotifyPlaylist />
      <div className="flex-1 max-sm:flex  ">
        <Fish />
      </div>
      <Waves />

      {showModal ? <JinFormulario /> : null}
    </div>
  );
};

export default Fishing;

