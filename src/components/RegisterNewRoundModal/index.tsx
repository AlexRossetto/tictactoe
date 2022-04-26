import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { RegisterNewPlayersModalProps, ErrorType } from './interface';
import { validateErrors } from './utils'

export const RegisterNewRoundModal = ({ isOpen, onRequestClose } : RegisterNewPlayersModalProps) => {

  const [playerOne, setPlayerOne] = useState<string>('');
  const [playerTwo, setPlayerTwo] = useState<string>('');
  const [error, setError] = useState<ErrorType>();

  function handleStartNewGame(e: FormEvent) {
    e.preventDefault();
    const errors = validateErrors(playerOne, playerTwo);
    if(errors.error) {
      console.log(errors, "oq temos aqui?")
      setError(errors)
      return;
    }
    localStorage.setItem("Players", JSON.stringify({ playerOne: playerOne, playerTwo: playerTwo }))
    setPlayerOne("");
    setPlayerTwo("");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      id="RegisterNewRoundModal"
    >
      <Container onSubmit={handleStartNewGame}>
        <h2>Register Players</h2>
        {error?.playerOneInputErrorMessage && <span>{error.playerOneInputErrorMessage}</span>}
        <input id="playerOne" maxLength={15} placeholder="Player One" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}/>
        {error?.playerTwoInputErrorMessage && <span>{error.playerTwoInputErrorMessage}</span>}
        <input id="playerTwo" maxLength={15} placeholder="Player Two" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}/>
        <button type="submit">Start Game</button>
      </Container>
    </Modal>
  )
}