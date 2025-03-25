import useRequestInfo from "../../hooks/useRequestInfo";
import { ButtonUtils } from "../../utils/ButtonUtils";
import { CardModalAccess } from "./CardModalAccess"; // Asegúrate de importar el modal de acceso
import useFlip from "../../hooks/useFlip";
import { InputName } from "../../utils/InputName";

export const VForm = () => {
  const {
    usuario,
    handleSubmit,
    maxFromLimitH,
    handleNameH,
    isMaxFromLimitReachedH,
    charCountFrom,
  } = useRequestInfo();
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
              className=" font-virthday backdrop-blur-xl bg-black/50 rounded-xl p-4 flex flex-col sm:justify-center items-center text-white"
              onSubmit={handleSubmit}
            >
              <label
                className="flex float-start text-base max-sm:text-base text-white text-center uppercase font-bold justify-center font-virthday"
                htmlFor="name"
              >
                Add your name to get your card
              </label>
              <InputName
                isMaxFromLimitReachedH={isMaxFromLimitReachedH}
                charCountFrom={charCountFrom}
                id="name"
                name="name"
                value={name}
                onChange={handleNameH}
                maxLength={maxFromLimitH}
                placeholder="WRITE HERE"
                className=" text-black text-base text-center "
                placeholderColor="text-black text-lg max-sm:text-base"
                maxLengthColor="text-white"
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
