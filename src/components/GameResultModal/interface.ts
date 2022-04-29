import { LeaderboardType } from '../Leaderboard/interface';
export interface GameResultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  result: LeaderboardType;
  setIsPlayerOneNext: (prop: boolean) => void;
  setResult: (prop: LeaderboardType) => void;
  setBoard: (prop: string[]) => void;
  setIsRegisterNewRoundModalOpen: (prop: boolean) => void;
  setRound: (prop: number) => void;
  round: number;
}