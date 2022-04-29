export interface RegisterNewPlayersModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  players: {playerOne: string | null, playerTwo: string | null},
  setPlayers: (props: Players) => void;
}
export interface ErrorType {
  error: boolean;
  playerOneInputErrorMessage: string;
  playerTwoInputErrorMessage: string;
}

export type Players = {
  playerOne: string | null;
  playerTwo: string | null;
}