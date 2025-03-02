import { createContext, useCallback, useEffect, useState } from "react";
import { wordList } from "../components/FishingKSJ/Fishing/wordList";

const FishContext = createContext();

const FishProvider = ({ children }) => {
  function getWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  }

  const MAX_TRIES = 6;
  const [wordData, setWordData] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [pressedLetter, setPressedLetter] = useState(null);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(true);

  // Convertir palabra a minúsculas
  const wordToGuess = wordData.word.toLowerCase();

  const correctLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter.toLowerCase())
  );

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter.toLowerCase())
  );

  const isLoser = incorrectGuesses.length >= MAX_TRIES;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter.toLowerCase()));

  const addGuessedLetter = useCallback(
    (letter) => {
      const lowerCaseLetter = letter.toLowerCase();
      if (guessedLetters.includes(lowerCaseLetter) || isLoser || isWinner)
        return;

      setGuessedLetters((currentLetters) => [
        ...currentLetters,
        lowerCaseLetter,
      ]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e) => {
      // Ignorar eventos dentro de inputs, textareas o elementos interactivos
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      const key = e.key.toLowerCase(); // Convertir tecla a minúscula
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter, guessedLetters]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordData(getWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  const handleClick = (key) => {
    setPressedLetter(key.toLowerCase());
    addGuessedLetter(key);

    setTimeout(() => {
      setPressedLetter(null);
    }, 200);
  };

  const handleStartOver = () => {
    setGuessedLetters([]);
    setWordData(getWord());
  };

  useEffect(() => {
    if (isWinner || isLoser) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    } else{
      setShow(false);
    }
  }, [isWinner, isLoser]);

  return (
    <FishContext.Provider
      value={{
        showModal,
        setShowModal,
        correctGuessCount: correctLetters.length,
        correctLetters,
        incorrectGuesses,
        isLoser,
        isWinner,
        wordToGuess,
        guessedLetters,
        addGuessedLetter,
        handleClick,
        pressedLetter,
        reveal: isLoser,
        activeLetters: correctLetters,
        disabled: isWinner || isLoser,
        inactiveLetters: incorrectGuesses,
        handleStartOver,
        wordData,
        setShow,
        show,
      }}
    >
      {children}
    </FishContext.Provider>
  );
};

export { FishProvider };

export default FishContext;