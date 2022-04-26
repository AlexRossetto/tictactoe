export const possibleWinningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const INITIAL_RESULT_STATE = {
  winner: null,
  result: null
}

export const INITIAL_ERROR_STATE = {
  error: false,
  playerOneInputErrorMessage: '',
  playerTwoInputErrorMessage: '',
}

export const fullWinningBoard = ["X","O","X","X","X","O","O","O","X"];
export const nonWinningBoard = ["X","O","X","X","X","O","O","O",""];

