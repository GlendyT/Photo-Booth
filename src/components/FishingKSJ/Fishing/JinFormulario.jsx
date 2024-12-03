import useFish from "../../../hooks/useFishing";
import useRequestInfo from "../../../hooks/useRequestInfo";
import { ButtonUtils } from "../../utils/ButtonUtils";

export const JinFormulario = () => {
  const { usuario, usuarioGenerado, handleSubmit, maxFromLimit } =
    useRequestInfo();
  const { name } = usuario;
  const { setShowModal } = useFish();
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className=" flex justify-center items-center fixed inset-10 z-10">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative w-full px-10 py-4 z-50  max-sm:px-10 max-sm:py-10">
          <form
            className="mt-5 font-michroma backdrop-blur-xl bg-black/50 rounded-xl p-4 flex flex-col gap-4 sm:justify-center items-center text-white max-sm:text-xs "
            onSubmit={handleSubmit}
          >
            <label
              className="flex float-start text-xs mb-2 text-white text-center uppercase font-bold justify-center pb-4 font-PressGame"
              htmlFor="name"
            >
              Unlock the game by adding your name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              type="text"
              placeholder="YOUR NAME"
              maxLength={maxFromLimit}
              onChange={usuarioGenerado}
              className="w-full p-3 text-black  border border-gray-100 rounded-md text-xs text-center"
            />
            <ButtonUtils
              label={name ? "UNLOCKED" : "LOCK"}
              type="sumbit"
              className=" w-full uppercase  text-2xl"
              bgColor="bg-blue-950"
              textColor="text-white"
              font=" font-PressGame "
              disabled={!name}
              disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
              onClick={handleCloseModal}
              icon={
                name ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )
              }
            />
          </form>
        </div>
        <div className="opacity-80 fixed inset-14 z-30 bg-black rounded-3xl max-sm:inset-8 max-lg:inset-8"></div>
      </div>
    </div>
  );
};
