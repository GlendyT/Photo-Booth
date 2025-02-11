import useRequestInfo from "../../hooks/useRequestInfo";
import { ButtonUtils } from "../../utils/ButtonUtils";
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
      const { name,  song } = usuario;
      
  return (
    <div className="flex  ">
      <div className="border border-gray-300 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-lg p-5">
        <div className="flex items-center justify-center mt-5">
          <h3 className="text-2xl font-providence font-bold text-purple-800">
            Rock, Paper, Scissors
          </h3>
        </div>

        <form className="mt-5 font-dmmono" onSubmit={handleSubmit}>
          <div className="my-5 ">
            <div
              className={`text-sm mb-2 float-end ${
                isMaxFromLimitReachedH ? "text-red-500" : "text-black"
              }`}
            >
              {isMaxFromLimitReachedH && (
                <span className="text-red-500">Too long!</span>
              )}{" "}
              {charCountFrom}/15
            </div>
            <input
              id="name"
              name="name"
              value={name}
              onChange={handleNameH}
              maxLength={maxFromLimitH}
              placeholder="Write your name"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                isMaxFromLimitReachedH
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <ListOponents/>

          <ButtonUtils
            label="Start to Play"
            type="submit"
            id="btn"
            disabled={!song}
            className="w-full p-3 uppercase bg-purple-800"
            bgColor="bg-black"
            textColor="text-white"
            font="font-pixel"
            disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
          />
        </form>
      </div>
    </div>
  );
}

export default FormOponent