import { PLAYER_0, PLAYER_X } from "./data";

export const switchPlayer = (player) => {
  return player === PLAYER_X ? PLAYER_0 : PLAYER_X;
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const border = `
  border-radius: 255px 15px 225px 15px / 15px 255px 15px;
  border: 2px solid #41403e;
`;
