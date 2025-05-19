import { SCORES } from "./data";
import { switchPlayer } from "./Utils";
// import Board from "./Board";

export const minimax = (player, board) => {
  const multiplier = SCORES[player];
  let thisScore;
  let maxScore = -Infinity;
  let bestMove = null;

  const winner = board.getWinner();
  if (winner !== null) {
    return [SCORES[winner], 0];
  }

  for (const square of board.getEmptySquares()) {
    let copy = board.clone();
    copy.makeMove(square, player);
    thisScore = multiplier * minimax(switchPlayer(player), copy)[0];

    if (thisScore >= maxScore) {
      maxScore = thisScore;
      bestMove = square;
    }
  }

  return [maxScore * multiplier, bestMove];
};
