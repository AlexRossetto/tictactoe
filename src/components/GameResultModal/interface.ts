import { LeaderboardType } from '../Leaderboard/interface';
import { Players } from '../RegisterNewRoundModal/interface';

export interface GameResultModalProps {
  isOpen: boolean;
  result: LeaderboardType;
  restartGame: () => void;
  onRequestClose: () => void;
  
}