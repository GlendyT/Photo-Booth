import { useEffect, useState } from "react";
import { HobiFormDischarge } from "../components/HobiDischarge/HobiFormDischarge.jsx";
import { HobiModalAccess } from "../components/HobiDischarge/HobiModalAccess.jsx";
import { HobiDischargeResult } from "../components/HobiDischarge/HobiDischargeResult.jsx";
function Hobisback() {
  const [currWord] = useState("hope");
  const [input, setInput] = useState("");
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [country, setCountry] = useState([]);
  const [name, setName] = useState([]);
  const [diseño, setDiseño] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const generateWordDisplay = () => {
    return isCorrectGuess ? currWord : "_".repeat(currWord.length).trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    const guessedWord = input.toLowerCase();
    const correct = guessedWord === currWord.toLowerCase();
    setIsCorrectGuess(correct);
    setHasSubmitted(true);
    setInput("");

    if (!correct) {
      setShowErrorMessage(true);
    }
  };

  useEffect(() => {
    if (showErrorMessage) {
      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000); // El mensaje desaparece después de 3 segundos

      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar o cuando cambie el estado
    }
  }, [showErrorMessage]);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`min-h-screen pt-16 bg-bghobiDesktop1 bg-cover bg-center bg-no-repeat max-sm:bg-center max-sm:bg-bghobidischargep ${
          country.length
            ? "bg-bghobiDesktop2 max-sm:bg-bghobimobile2"
            : "bg-bghobiDesktop1 max-sm:bg-bghobimobile1"
        } ${isMobile ? "pt1" : "pt-16"} `}
      >
        <div
          className={`flex flex-col justify-center items-center max-sm:px-2 ${
            isCorrectGuess ? "" : "hidden"
          }`}
        >
          {!country.length > 0 ? (
            <HobiFormDischarge
              setCountry={setCountry}
              setName={setName}
              setDiseño={setDiseño}
              setSelectedImage={setSelectedImage}
              isMobile={isMobile}
            />
          ) : (
            <HobiDischargeResult
              country={country}
              setCountry={setCountry}
              name={name}
              setName={setName}
              setDiseño={setDiseño}
              diseño={diseño}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              isMobile={isMobile}
            />
          )}
        </div>
        <>
          {showModal ? (
            <HobiModalAccess
              hasSubmitted={hasSubmitted}
              setShowModal={setShowModal}
              generateWordDisplay={generateWordDisplay}
              handleSubmit={handleSubmit}
              isCorrectGuess={isCorrectGuess}
              setInput={setInput}
              input={input}
              setShowErrorMessage={setShowErrorMessage}
              showErrorMessage={showErrorMessage}
            />
          ) : null}
        </>
      </div>
    </>
  );
}

export default Hobisback;
