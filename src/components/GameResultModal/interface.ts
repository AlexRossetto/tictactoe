import { LeaderboardType } from '../Leaderboard/interface';
import { Players } from '../RegisterNewRoundModal/interface';

export interface GameResultModalProps {
  isOpen: boolean;
  result: LeaderboardType;
  round: number;
  onRequestClose: () => void;
  setIsPlayerOneNext: (prop: boolean) => void;
  setResult: (prop: LeaderboardType) => void;
  setBoard: (prop: string[]) => void;
  setIsRegisterNewRoundModalOpen: (prop: boolean) => void;
  setRound: (prop: number) => void;
  setPlayers: (prop: Players) => void;
}