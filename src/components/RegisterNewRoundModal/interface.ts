export interface RegisterNewPlayersModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  players: Players,
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