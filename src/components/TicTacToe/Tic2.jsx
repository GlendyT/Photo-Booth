import useRequestInfo from "../../hooks/useRequestInfo";
import useTicTacToe from "../../hooks/useTicTacToe";
import { ButtonUtils } from "../../utils/ButtonUtils";
import { InputName } from "../../utils/InputName";
import { tictactoe } from "./data";

const Tic2 = () => {
  const { changeMode, mode, GAME_MODES, choosePlayer, PLAYER_0, PLAYER_X } =
    useTicTacToe();
  const {
    handleSubmit,
    isMaxFromLimitReachedH,
    charCountFrom,
    usuario,
    handleNameH,
    maxFromLimit,
  } = useRequestInfo();
  const { name } = usuario;
  return (
    <div className="flex flex-row max-sm:flex-col max-sm:gap-14 items-center h-full w-full gap-44 px-20">
      <div className=" h-full w-full flex flex-col   items-center justify-center">
        <span className="shadow-[0px_1px_6px_18px_rgba(147,_51,_234,_0.5)] border-purple-400 text-center text-white border-2 w-44 max-sm:w-24 max-sm:text-xs text-lg uppercase font-extrabold rounded-t-xl ">
          TIC-TAC-TOE
        </span>
        <div className=" w-full max-sm:w-40 flex items-center justify-center py-10 max-sm:py-2 shadow-[0px_1px_6px_10px_rgba(147,_51,_234,_0.5)] border-purple-400 border-2 font-extrabold font-libre rounded-3xl bg-black/50">
          <div className="text-white w-96 max-sm:w-36 text-center p-4 grid grid-cols-3 gap-1 max-sm:gap-4 text-7xl max-sm:text-lg ">
            {tictactoe.map((letra) => (
              <div
                key={letra.id}
                className=" rounded-xl max-sm:rounded-sm uppercase flex items-center justify-center h-24 max-sm:h-6 max-sm:w-6 w-full shadow-[0px_1px_6px_8px_rgba(147,_51,_234,_0.5)]"
              >
                {letra.letter}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" font-extrabold w-full h-full flex flex-col items-center justify-center">
        <span className="shadow-[0px_1px_6px_18px_rgba(147,_51,_234,_0.5)] border-purple-400 text-center text-white border-2 w-44 text-lg uppercase font-extrabold rounded-t-xl ">
          Game details
        </span>
        <div className=" rounded-md text-white p-8 shadow-[0px_1px_6px_10px_rgba(147,_51,_234,_0.5)] border-purple-400 border-2 py-20 bg-black/50 max-sm:py-4 max-sm:px-2 ">
          <div className="flex flex-col items-center mb-6  p-2 ">
            <form
              className=" flex flex-col sm:justify-center items-center max-sm:text-xs "
              onSubmit={handleSubmit}
            >
              <InputName
                isMaxFromLimitReachedH={isMaxFromLimitReachedH}
                charCountFrom={charCountFrom}
                id="name"
                name="name"
                value={name}
                onChange={handleNameH}
                maxLength={maxFromLimit}
                placeholder="YOUR NAME"
                className=" text-black text-sm text-center w-full "
                placeholderColor="text-gray-500"
                maxLengthColor="text-black "
                classNameBG="bg-gray-100"
              />
            </form>
            <p className="mb-2">Select the difficulty of the game</p>
            <div className="flex flex-row gap-2  ">
              {Object.keys(GAME_MODES).map((key) => {
                const gameMode = GAME_MODES[key];
                return (
                  <label
                    key={gameMode}
                    className="flex items-center gap-2  px-2 rounded-md capitalize"
                  >
                    <input
                      type="radio"
                      name="gameMode"
                      value={gameMode}
                      checked={mode === gameMode}
                      onChange={changeMode}
                      className="hidden"
                    />
                    {key}
                    <span
                      className={`w-4 h-4 rounded ${
                        mode === gameMode
                          ? "ring-4 bg-black outline-none"
                          : "bg-gray-500 outline-purple-500 outline"
                      }`}
                    ></span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center mb-8 p-2 ">
            <p className="mb-2">Choose who you are going to be</p>
            <div className="flex w-[150px] justify-between items-center">
              <ButtonUtils
                onClick={() => choosePlayer(PLAYER_X)}
                label="X"
                className=" shadow-[0px_1px_6px_4px_rgba(147,_51,_234,_0.5)] border-2 text-white bg-none  px-1 py-0 max-sm:py-2 rounded-none "
                bgColor="bg-none"
              />
              <p>or</p>
              <ButtonUtils
                onClick={() => choosePlayer(PLAYER_0)}
                className="shadow-[0px_1px_6px_4px_rgba(147,_51,_234,_0.5)] border-2 text-white  px-1 py-0 rounded-none max-sm:py-2"
                label="O"
                bgColor="bg-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tic2;
