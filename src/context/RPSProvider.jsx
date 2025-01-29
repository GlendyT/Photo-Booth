/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { options } from "../components/RPS/rockpaper";

const RPSContext = createContext();

const RPSProvider = ({ children }) => {
  const getResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 0;
    }

    if (options[userChoice].beats.includes(computerChoice)) {
      return 1;
    }

    return 2;
  };

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const maxTurns = 3;

  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(` ${options[userChoice]?.emoji} `);
    }
  }, [userChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(` ${options[computerChoice]?.emoji} `);
    }
  }, [computerChoice]);

  const handlePlay = (choice) => {
    if (turns >= maxTurns) return; // No permitir jugar si los turnos se agotaron

    setUserChoice(choice);
    setDisabled(true);
    const randomChoice = Math.floor(Math.random() * 3);
    setComputerChoice(randomChoice);

    const gameResult = getResult(choice, randomChoice);
    setResult(gameResult);

    if (gameResult !== 0) {
      // Solo incrementar turnos si no es empate
      setTurns((prev) => prev + 1);

      if (gameResult === 1) {
        setUserWins((prev) => prev + 1);
      } else if (gameResult === 2) {
        setComputerWins((prev) => prev + 1);
      }
    }

    // Reactivar botones después de una pequeña pausa
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setTurns(0);
    setUserWins(0);
    setComputerWins(0);
    setDisabled(false);
  };

  return (
    <RPSContext.Provider
      value={{
        userChoice,
        computerChoice,
        userMessage,
        computerMessage,
        result,
        disabled,
        handlePlay,
        reset,
        options,
        turns,
        maxTurns,
        userWins,
        computerWins,
        setComputerMessage,
      }}
    >
      {children}
    </RPSContext.Provider>
  );
};

export { RPSProvider };

export default RPSContext;
