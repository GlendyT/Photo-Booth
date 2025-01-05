import useRequestInfo from "../../hooks/useRequestInfo";
import { ButtonUtils } from "../../utils/ButtonUtils";
import { CardModalAccess } from "./CardModalAccess"; // Asegúrate de importar el modal de acceso
import useFlip from "../../hooks/useFlip";

export const VForm = () => {
  const { usuario, handleSubmit, maxFromLimitH,handleNameH } =
    useRequestInfo();
  const { name } = usuario;
  const { showAccessModal, handleUnlockClick } = useFlip();

  return (
    <>
      {showAccessModal ? (
        <CardModalAccess /> // Renderiza el modal de acceso
      ) : (
        <div className="flex justify-center items-center fixed inset-10 z-10 flex-col max-sm:text-xs">
          <div className="z-50 px-10 py-4 max-sm:px-10 max-sm:py-10 w-96">
            <form
              className="mt-5 font-virthday backdrop-blur-xl bg-black/50 rounded-xl p-4 flex flex-col gap-4 sm:justify-center items-center text-white"
              onSubmit={handleSubmit}
            >
              <label
                className="flex float-start text-base max-sm:text-base mb-2 text-white text-center uppercase font-bold justify-center pb-4 font-virthday"
                htmlFor="name"
              >
                Add your name to get your card
              </label>
              <input
                id="name"
                name="name"
                value={name}
                type="text"
                placeholder="WRITE HERE"
                maxLength={maxFromLimitH}
                onChange={handleNameH}
                className="w-full p-3 text-black border border-gray-100 rounded-md text-lg text-center max-sm:text-base"
              />
              <ButtonUtils
                label={"REQUEST"}
                type="button"
                className="w-full uppercase text-lg max-sm:text-base flex items-center"
                bgColor="bg-black"
                textColor="text-white"
                font="font-virthday"
                disabled={!name}
                disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
                onClick={name ? handleUnlockClick : undefined} 
              />
            </form>
          </div>
          <div className="opacity-80 fixed inset-52 z-30 bg-black rounded-3xl max-sm:inset-8 max-lg:inset-8"></div>
        </div>
      )}
    </>
  );
};
