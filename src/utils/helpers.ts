import { possibleWinningPositions } from './constants';
import { LeaderboardType } from '../components/Leaderboard/interface';

export const checkWin = (board: any) => {
  for(let i = 0; i < possibleWinningPositions.length ; i++) {
    const [a,b,c] = possibleWinningPositions[i];
    if(board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

export const checkIfTie = (
  result: LeaderboardType,
  isBoardFilled: boolean,
  setResult: ({ winner, result }: LeaderboardType) => void,
  setIsGameResultModalOpen: (prop : boolean) => void,
) => {
  if (isBoardFilled && result.result === null) {
    setResult({ winner: null, result: 'Tie' });
    setIsGameResultModalOpen(true);
  }
};
