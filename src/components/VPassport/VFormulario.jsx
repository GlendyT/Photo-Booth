import { ButtonUtils } from "../../utils/ButtonUtils";
import useRequestInfo from "../../hooks/useRequestInfo";
import { InputName } from "../../utils/InputName";

export const VFormulario = () => {
  const {
    usuario,
    handleNameH,
    handleSubmit,
    error,
    maxFromLimit,
    isMaxFromLimitReachedH,
    charCountFrom,
  } = useRequestInfo();
  const { name } = usuario;
  return (
    <div className=" flex flex-col items-center text-white max-sm:text-xs">
      <div className=" sm:max-w-sm">
        <div className="  px-10 py-4  max-sm:px-10 max-sm:py-10">
          <form
            className="font-michroma backdrop-blur-xl bg-black/50 rounded-xl p-4 flex flex-col sm:justify-center items-center text-white max-sm:text-xs"
            onSubmit={handleSubmit}
          >
            <label
              className="flex float-start text-sm text-black hover:text-white uppercase font-bold justify-center"
              htmlFor="name"
            >
              GET YOUR PASSPORT
            </label>
            <InputName
              isMaxFromLimitReachedH={isMaxFromLimitReachedH}
              charCountFrom={charCountFrom}
              id="name"
              name="name"
              value={name}
              onChange={handleNameH}
              maxLength={maxFromLimit}
              placeholder="YOUR NAME"
              className=" text-black text-sm text-center "
              placeholderColor="text-gray-500"
              maxLengthColor="text-black "
              classNameBG="bg-gray-100"
            />
            {error && (
              <p className="text-white text-center font-bold uppercase font-dmmono pt-1 text-xs bg-blue-950 mt-2 rounded-sm px-2">
                All questions must be filled out
              </p>
            )}
            <ButtonUtils
              label="GENERATE"
              type="sumbit"
              className=" w-full uppercase  text-xs"
              bgColor="bg-blue-950"
              textColor="text-white"
              font="font-michroma"
              disabled={!name}
              disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
