import { CardSelector } from "./CardSelector";
import { CARDDESKTOP, CARDPHONE } from "./Data";
import { ButtonUtils } from "../utils/ButtonUtils";
import useRequestInfo from "../../hooks/useRequestInfo";

export const HobiFormDischarge = () => {
  const {
    usuario,
    handleSubmit,
    isMaxFromLimitReachedH,
    charCountFrom,
    maxFromLimitH,
    isMaxCharLimitReachedH,
    charCount,
    maxCharLimitH,
    isMobile,
    error,
    handleNameH,
    handleContentH
  } = useRequestInfo();
  const { name, content, diseño } = usuario;
  return (
    <div className="w-96 text-white max-sm:text-xs">
      <div className=" max-sm:px-10 max-sm:py-10 ">
        <form
          className=" font-providence backdrop-blur-sm bg-black/30 rounded-xl p-4 gap-4 sm:justify-center items-center text-white max-sm:text-xs  "
          onSubmit={handleSubmit}
        >
          <div
            className={`text-sm float-end ${
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
            type="text"
            value={name}
            maxLength={maxFromLimitH}
            placeholder="Your Name"
            onChange={handleNameH}
            className={`appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none   ${
              isMaxFromLimitReachedH
                ? "border-red-500 text-red-500"
                : "border-gray-300"
            }`}
          />
          <div
            className={`text-sm float-end ${
              isMaxCharLimitReachedH ? "text-red-500" : "text-black"
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
            placeholder="Write your country or city"
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
              isMaxCharLimitReachedH
                ? "border-red-500 text-red-500"
                : "border-gray-300"
            }`}
          />
          <CardSelector
            ver1={isMobile ? CARDPHONE.ver1P : CARDDESKTOP.ver1D}
            ver2={isMobile ? CARDPHONE.ver2P : CARDDESKTOP.ver2D}
          />
          <div className="justify-center flex">
            <ButtonUtils
              label="Create post"
              type="submit"
              className="font-providence uppercase"
              bgColor="bg-black"
              textColor="text-white"
              font="font-providence"
              disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
              disabled={!diseño}
            />
          </div>
        </form>
        {error && (
          <p className="text-red-700 text-center font-bold uppercase font-providence pt-1">
            All questions must be filled out
          </p>
        )}
        <div
          className={` ${
            diseño
              ? "relative px-10 py-4 max-sm:px-2 max-sm:py-8 backdrop-blur-sm bg-black/20 rounded-3xl  my-2 text-center font-providence transition-transform delay-150 text-[rgb(112,128,144)] font-extrabold max-sm:backdrop-blur-3xl max-sm:bg-white/30 p-4 gap-4 sm:justify-center items-center max-sm:text-xs "
              : "hidden"
          } `}
        >
          Let's welcome Hobi with a special card
          <p className="text-xs text-black max-sm:text-xs ">
            This message will be shown in korean
          </p>
          "Welcome home, Jung Hoseok! We missed you and we are proud of you. Our
          sunshine is home. Wishing you all the best of luck. Sending you all of
          our love."
        </div>
      </div>
    </div>
  );
};
