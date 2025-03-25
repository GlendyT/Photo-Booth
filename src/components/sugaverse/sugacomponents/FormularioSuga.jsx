import Header from "../Titulo/Header";
import List from "../ListadoDiseños/List";
import useRequestInfo from "../../../hooks/useRequestInfo";
import { ButtonUtils } from "../../../utils/ButtonUtils";
import { InputName } from "../../../utils/InputName";

const FormularioSuga = () => {
  const {
    usuario,
    usuarioGenerado,
    handleSubmit,
    isMaxCharLimitReached,
    isMaxFromLimitReachedH,
    maxCharLimit,
    charCount,
    handleContent,
    charCountFrom,
    maxFromLimitH,
    handleNameH,
    error,
  } = useRequestInfo();
  const { name, content, diseño } = usuario;

  return (
    <>
      <div className=" text-white max-sm:text-xs w-96">
        <div className="max-sm:px-10 max-sm:py-10">
          <Header />
          <form className="mt-5 font-dmmono" onSubmit={handleSubmit}>
            <div className="my-5">
              <label
                className="flex float-start text-sm mb-2"
                htmlFor="descripcion"
              >
                Your Lyrics
              </label>
              <div
                className={`text-sm mb-2 float-end ${
                  isMaxCharLimitReached ? "text-red-500" : "text-black"
                }`}
              >
                {isMaxCharLimitReached && (
                  <span className="text-red-500">Too long!</span>
                )}{" "}
                {charCount}/280
              </div>
              <textarea
                maxLength={maxCharLimit}
                placeholder="Write something"
                rows={5}
                id="content"
                name="content"
                value={content}
                onChange={handleContent}
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                  isMaxCharLimitReached
                    ? "border-red-500 text-red-500"
                    : "border-gray-300"
                }`}
              />
            </div>

            <InputName
              from="From"
              fromColor="text-white"
              maxLengthColor="text-black"
              isMaxFromLimitReachedH={isMaxFromLimitReachedH}
              charCountFrom={charCountFrom}
              id="name"
              name="name"
              value={name}
              onChange={handleNameH}
              maxLength={maxFromLimitH}
              placeholder="Your Name"
              className={` text-gray-700  `}
            />
            <List diseño={diseño} usuarioGenerado={usuarioGenerado} />
            <ButtonUtils
              label="Create Post"
              type="submit"
              id="btn"
              disabled={!diseño}
              className="w-full p-3 uppercase"
              bgColor="bg-black"
              textColor="text-white"
              font="font-pixel"
              disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
            />
          </form>
        </div>
        {error && (
          <p className="text-red-700 text-center font-bold uppercase font-dmmono pt-1">
            All questions must be filled out
          </p>
        )}
      </div>
    </>
  );
};

export default FormularioSuga;
