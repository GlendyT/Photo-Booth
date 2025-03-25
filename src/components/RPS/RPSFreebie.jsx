import useRequestInfo from "../../hooks/useRequestInfo";
import useRPS from "../../hooks/useRPS";
import freebie from "../RPS/assets/freebie.png";

export const RPSFreebie = () => {
  const { usuario } = useRequestInfo();
  const { userWins, computerWins } = useRPS();
  const { name, song } = usuario;
  return (
    <div className=" flex items-center fixed inset-14 z-10 bg-black bg-opacity-70"> 
      <div className="w-auto my-2 mx-auto max-w-3xl">
        <div id="print" className="relative">
          <img src={freebie} alt="fishingwithjin" className=" object-contain" />

          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center text-center ">
              <div className="flex flex-col items-center justify-center gap-2 max-md:gap-4 max-md:pt-2 max-md:mt-8">
                <div className="font-extrabold font-fuzzybubbles text-black gap-1 flex flex-col  ">
                  <p className="max-md:text-xs text-3xl  ">
                    {userWins >= 2 ? name : computerWins >= 2 ? song : ""}
                  </p>
                  <p className="max-md:text-xs  text-sm ">won against</p>
                  <p className="max-md:text-xs text-3xl   ">
                    {computerWins >= 2 ? name : userWins >= 2 ? song : ""}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-0 max-md:gap-2 max-md:pt-2 max-md:mt-8 max-md:text-xs text-black font-fuzzybubbles text-sm font-extrabold">
                  <p>Thanks for playing the game</p>
                  <p>Rock-Paper-Scissors</p>
                  <p>Keep supporting BTS projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
