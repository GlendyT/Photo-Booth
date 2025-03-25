import useRequestInfo from "../../hooks/useRequestInfo";
import ListV from "./ListV";
import { ButtonUtils } from "../../utils/ButtonUtils";
import { InputName } from "../../utils/InputName";

export default function Formulario() {
  const {
    usuario,
    handleSubmit,
    handleNameH,
    isMaxFromLimitReachedH,
    charCountFrom,
    isMaxCharLimitReachedH,
    maxFromLimitH,
    maxCharLimitH,
    handleContentH,
    charCount,
  } = useRequestInfo();
  const { name, content, diseño } = usuario;

  return (
    <div className="flex  ">
      <div className=" shadow-2xl relative flex flex-col w-full backdrop-blur-lx bg-pink-100/20 outline-none focus:outline-none rounded-lg p-5">
        <div className="flex items-center justify-center mt-5">
          <h3 className="text-2xl font-providence font-bold text-purple-800">
            Valentine's Day with BTS and Army
          </h3>
        </div>

        <form className="mt-5 font-dmmono" onSubmit={handleSubmit}>
          <InputName
            isMaxFromLimitReachedH={isMaxFromLimitReachedH}
            charCountFrom={charCountFrom}
            from="To"
            id="name"
            name="name"
            value={name}
            onChange={handleNameH}
            maxLength={maxFromLimitH}
            placeholder="Whom"
            className=" text-sm "
            placeholderColor="text-black text-lg max-sm:text-base"
            maxLengthColor="text-purple-900"
            fromColor={"text-purple-900"}
          />

          <div className="my-5 ">
            <label className="flex float-start text-sm mb-2 text-purple-900">
              From
            </label>
            <div
              className={`text-sm mb-2 float-end ${
                isMaxCharLimitReachedH ? "text-red-500" : "text-purple-900"
              }`}
            >
              {isMaxCharLimitReachedH && (
                <span className="text-red-500">Too long!</span>
              )}{" "}
              {charCount}/20
            </div>
            <input
              id="content"
              name="content"
              type="text"
              value={content}
              onChange={handleContentH}
              maxLength={maxCharLimitH}
              placeholder="Your Name"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                isMaxCharLimitReachedH
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>

          <ListV />

          <ButtonUtils
            label="Create Post"
            type="submit"
            id="btn"
            disabled={!diseño}
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
