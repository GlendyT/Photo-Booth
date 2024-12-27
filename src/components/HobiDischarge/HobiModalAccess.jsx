import React from "react";
import { ButtonUtils } from "../../utils/ButtonUtils";
import useRequestInfo from "../../hooks/useRequestInfo";

export const HobiModalAccess = () => {
  const {
    generateWordDisplay,
    input,
    setInput,
    isCorrectGuess,
    showErrorMessage,
    setShowErrorMessage,
    setShowModal,
    setHasSubmitted,
    handleCorrectWord,
  } = useRequestInfo();
  const handleCheckCorrectWord = () => {
    if (!isCorrectGuess) {
      setShowErrorMessage(true);
    } else {
      setShowModal(false);
      setHasSubmitted(true);
      setShowErrorMessage(false);
    }
  };
  return (
    <>
      <div className="justify-center items-center flex fixed inset-10 z-40 ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-providence font-bold">Access Word</h3>
            </div>
            <div className="relative p-2 flex-auto">
              <p className="my-4 font-providence text-lg leading-relaxed">
                I´m your hope, you are my hope, I am j-
                {generateWordDisplay()}
              </p>
            </div>
            <form
              onSubmit={handleCorrectWord}
              className="flex items-center justify-center"
            >
              <input
                id="input"
                name="input"
                type="text"
                value={input}
                maxLength={4}
                placeholder="Write the correct word"
                onChange={(e) => setInput(e.target.value)}
                className={`text-center font-providence outline py-2 ${
                  isCorrectGuess ? "hidden" : ""
                }`}
              />
            </form>

            <div className="flex items-center justify-end p-4 rounded-b">
              {isCorrectGuess ? (
                <ButtonUtils
                  label="Access Granted! Click Here"
                  onClick={handleCheckCorrectWord}
                  bgColor="bg-emerald-500 active:bg-emerald-600 "
                  textColor="text-white"
                  font="font-providence"
                />
              ) : (
                <ButtonUtils
                  label={showErrorMessage ? "Wrong, Try Again" : "Submit Guess"}
                  onClick={handleCorrectWord}
                  className={`bg-purple-500 delay-75`}
                  bgColor={showErrorMessage ? "bg-red-500" : "bg-purple-900"}
                  textColor="text-white"
                  font="font-providence"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-30 fixed inset-10 z-30 bg-purple-950 "></div>
    </>
  );
};
