import { DIMENSIONS, DRAW } from "./data";

export default class Board {
  constructor(grid) {
    this.grid = grid || new Array(DIMENSIONS ** 2).fill(null);
    this.winningIndex = null;
  }

  // Marca una jugada si la casilla está vacía
  makeMove(square, player) {
    if (this.grid[square] === null) {
      this.grid[square] = player;
    }
  }

  // Retorna un array con los índices de las casillas vacías
  getEmptySquares(grid = this.grid) {
    const squares = [];
    grid.forEach((square, i) => {
      if (square === null) squares.push(i);
    });
    return squares;
  }

  // Retorna true si el tablero está vacío
  isEmpty(grid = this.grid) {
    return this.getEmptySquares(grid).length === DIMENSIONS ** 2;
  }

  // Devuelve el ganador (número de jugador), DRAW o null si no hay ganador
  getWinner(grid = this.grid) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let res = null;

    winningCombos.forEach((combo, i) => {
      if (
        grid[combo[0]] !== null &&
        grid[combo[0]] === grid[combo[1]] &&
        grid[combo[0]] === grid[combo[2]]
      ) {
        res = grid[combo[0]];
        this.winningIndex = i;
      }
    });

    if (res === null && this.getEmptySquares(grid).length === 0) {
      res = DRAW;
      this.winningIndex = null;
    }

    return res;
  }

  // Devuelve CSS en string para la línea ganadora
  getStrikethroughStyles = () => {
    const defaultWidth = 285;
    const diagonalWidth = 400;

    switch (this.winningIndex) {
      case 0:
        return `
          transform: none;
          top: 41px;
          left: 15px;
          width: ${defaultWidth}px;
        `;
      case 1:
        return `
          transform: none;
          top: 140px;
          left: 15px;
          width: ${defaultWidth}px;
        `;
      case 2:
        return `
          transform: none;
          top: 242px;
          left: 15px;
          width: ${defaultWidth}px;
        `;
      case 3:
        return `
          transform: rotate(90deg);
          top: 145px;
          left: -86px;
          width: ${defaultWidth}px;
        `;
      case 4:
        return `
          transform: rotate(90deg);
          top: 145px;
          left: 15px;
          width: ${defaultWidth}px;
        `;
      case 5:
        return `
          transform: rotate(90deg);
          top: 145px;
          left: 115px;
          width: ${defaultWidth}px;
        `;
      case 6:
        return `
          transform: rotate(45deg);
          top: 145px;
          left: -44px;
          width: ${diagonalWidth}px;
        `;
      case 7:
        return `
          transform: rotate(-45deg);
          top: 145px;
          left: -46px;
          width: ${diagonalWidth}px;
        `;
      default:
        return null;
    }
  };

  // Clona el tablero retornando una nueva instancia
  clone() {
    return new Board(this.grid.slice());
  }
}
