import useRequestInfo from "../../hooks/useRequestInfo";
import { ButtonUtils } from "../../utils/ButtonUtils";
import { InputName } from "../../utils/InputName";
import ListOponents from "./ListOponents";

const FormOponent = () => {
  const {
    usuario,
    handleSubmit,
    handleNameH,
    isMaxFromLimitReachedH,
    charCountFrom,
    maxFromLimitH,
  } = useRequestInfo();
  const { name, song } = usuario;

  return (
    <div className="flex  ">
      <div className=" w-96 relative flex flex-col outline-none focus:outline-none rounded-lg p-5">
        <div className="flex items-center justify-center ">
          <h3 className="text-2xl font-providence font-extrabold text-purple-950">
            Rock-Paper-Scissors
          </h3>
        </div>

        <form className=" font-dmmono" onSubmit={handleSubmit}>
          <InputName
            isMaxFromLimitReachedH={isMaxFromLimitReachedH}
            charCountFrom={charCountFrom}
            id="name"
            name="name"
            value={name}
            onChange={handleNameH}
            maxLength={maxFromLimitH}
            placeholder="write one name"
            placeholderColor={"placeholder-violet-600 "}
            classNameBG={"bg-transparent"}
          />
          <ListOponents />

          <ButtonUtils
            label="Start the game"
            type="submit"
            id="btn"
            disabled={!song}
            className="w-full uppercase bg-purple-700"
            bgColor="bg-purple-800"
            textColor="text-white"
            font="font-pixel"
            disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
            padding="py-2 px-1"
            size="text-md"
          />
        </form>
      </div>
    </div>
  );
};

export default FormOponent;
