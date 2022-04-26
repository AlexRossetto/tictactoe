export interface RegisterNewPlayersModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface ErrorType {
  error: boolean;
  playerOneInputErrorMessage: string;
  playerTwoInputErrorMessage: string;
}