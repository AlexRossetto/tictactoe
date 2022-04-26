import { possibleWinningPositions } from './constants';
import { LeaderboardType } from '../components/Leaderboard/interface';

export const checkWin = (board: string[]) => {
  for(let i = 0; i < possibleWinningPositions.length ; i++) {
    const [firstPosition,secondPosition,thirdPosition] = possibleWinningPositions[i];
    if(board[firstPosition] && board[firstPosition] === board[secondPosition] && board[firstPosition] === board[thirdPosition]) {
      return true;
    }
  }
  return false;
}

export const checkIfTie = (
  result: LeaderboardType,
  isBoardFilled: boolean,
) => {
  if (isBoardFilled && result.result === null) {
    return true;
  }
  return false;
};
