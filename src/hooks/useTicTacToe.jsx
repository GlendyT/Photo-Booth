import { useContext } from "react";
import TicTacToeContext from "../context/TicTacToeProvider";

const useTicTacToe = () => {
  return useContext(TicTacToeContext);
};
export default useTicTacToe;
