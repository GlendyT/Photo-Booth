import { createContext, useCallback, useEffect, useState } from "react";
import {
  DIMENSIONS,
  DRAW,
  GAME_MODES,
  GAME_STATES,
  PLAYER_0,
  PLAYER_X,
  SQUARE_DIMS,
} from "../../src/components/TicTacToe/data";
import Board from "../components/TicTacToe/Board";
import { getRandomInt, switchPlayer } from "../components/TicTacToe/Utils";
import { minimax } from "../components/TicTacToe/minmax";

const TicTacToeContext = createContext();

const arr = new Array(DIMENSIONS ** 2).fill(null);
const board = new Board();

const borderClass =
  "shadow-[0px_1px_6px_10px_rgba(147,_51,_234,_0.5)] border-purple-400 border-2 "; // Reemplazo simple para `border` styled-components

const TicTacToeProvider = ({ children }) => {
  const squares = arr;

  const [players, setPlayers] = useState({
    human: null,
    ai: null,
  });
  const [gameState, setGameState] = useState(GAME_STATES.notStarted);
  const [grid, setGrid] = useState(squares);
  const [winner, setWinner] = useState(null);
  const [nextMove, setNextMove] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState(GAME_MODES.medium);

  useEffect(() => {
    const boardWinner = board.getWinner(grid);

    const declareWinner = (winner) => {
      let winnerStr;
      switch (winner) {
        case PLAYER_X:
          winnerStr = "Player X wins!";
          break;
        case PLAYER_0:
          winnerStr = "Player O wins!";
          break;
        case DRAW:
        default:
          winnerStr = "It's a draw";
      }
      setGameState(GAME_STATES.over);
      setWinner(winnerStr);
      setTimeout(() => setModalOpen(true), 300);
    };

    if (boardWinner !== null && gameState !== GAME_STATES.over) {
      declareWinner(boardWinner);
    }
  }, [gameState, grid, nextMove]);

  const move = useCallback(
    (index, player) => {
      if (player !== null && gameState === GAME_STATES.inProgress) {
        setGrid((grid) => {
          const gridCopy = grid.concat();
          gridCopy[index] = player;
          return gridCopy;
        });
      }
    },
    [gameState]
  );

  const aiMove = useCallback(() => {
    const boardInst = new Board(grid.concat());
    const emptyIndices = boardInst.getEmptySquares(grid);
    let index;
    switch (mode) {
      case GAME_MODES.easy:
        do {
          index = getRandomInt(0, 8);
        } while (!emptyIndices.includes(index));
        break;
      case GAME_MODES.medium:
        const smartMove = !boardInst.isEmpty(grid) && Math.random() < 0.5;
        if (smartMove) {
          index =
            players.ai !== null ? minimax(players.ai, boardInst)[1] : null;
        } else {
          do {
            index = getRandomInt(0, 8);
          } while (!emptyIndices.includes(index));
        }
        break;
      case GAME_MODES.difficult:
      default:
        index = boardInst.isEmpty(grid)
          ? getRandomInt(0, 8)
          : players.ai !== null
          ? minimax(players.ai, boardInst)[1]
          : null;
    }

    if (index !== null && !grid[index]) {
      if (players.ai !== null) {
        move(index, players.ai);
      }
      setNextMove(players.human);
    }
  }, [move, grid, players, mode]);

  useEffect(() => {
    let timeout;
    if (
      nextMove !== null &&
      nextMove === players.ai &&
      gameState !== GAME_STATES.over
    ) {
      timeout = setTimeout(() => {
        aiMove();
      }, 500);
    }
    return () => timeout && clearTimeout(timeout);
  }, [nextMove, aiMove, players.ai, gameState]);

  const humanMove = (index) => {
    if (!grid[index] && nextMove === players.human) {
      move(index, players.human);
      setNextMove(players.ai);
    }
  };

  const choosePlayer = (option) => {
    setPlayers({ human: option, ai: switchPlayer(option) });
    setGameState(GAME_STATES.inProgress);
    setNextMove(PLAYER_X);
  };

  const startNewGame = () => {
    setGameState(GAME_STATES.notStarted);
    setGrid(arr);
    setModalOpen(false);
  };

  const changeMode = (e) => {
    setMode(e.target.value);
  };

  // Calculate container width for the board: number of dims * (square dims + gap)
  const containerWidth = DIMENSIONS * (SQUARE_DIMS + 5);

  function cssStringToObject(cssString) {
    if (!cssString) return {};
    return cssString
      .split(";")
      .map((rule) => rule.trim())
      .filter(Boolean)
      .reduce((acc, rule) => {
        const [prop, value] = rule.split(":").map((part) => part.trim());
        if (!prop || !value) return acc;
        // Convertir kebab-case a camelCase
        const camelProp = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        acc[camelProp] = value;
        return acc;
      }, {});
  }

  // Strikethrough styles, fallback empty string
  //   const strikeStyles =
  //     gameState === GAME_STATES.over ? board.getStrikethroughStyles() : "";
  const strikethroughString =
    gameState === GAME_STATES.over ? board.getStrikethroughStyles() : "";
  const strikeStyles = cssStringToObject(strikethroughString);

  return (
    <TicTacToeContext.Provider
      value={{
        containerWidth,
        grid,
        humanMove,
        borderClass,
        SQUARE_DIMS,
        PLAYER_X,
        strikeStyles,
        modalOpen,
        winner,
        setModalOpen,
        startNewGame,
        gameState,
        GAME_STATES,
        changeMode,
        mode,
        GAME_MODES,
        choosePlayer,
        PLAYER_0,
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
};

export { TicTacToeProvider };

export default TicTacToeContext;
