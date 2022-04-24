import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { RegisterNewPlayersModalProps } from './interface';

export const RegisterNewRoundModal = ({ isOpen, onRequestClose } : RegisterNewPlayersModalProps) => {

  const [playerOne, setPlayerOne] = useState<string>('');
  const [playerTwo, setPlayerTwo] = useState<string>('');

  function handleStartNewGame(e: FormEvent) {
    e.preventDefault();
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
    >
      <Container onSubmit={handleStartNewGame}>
        <h2>Register Players</h2>
        <input maxLength={15} required placeholder="Player one" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}/>
        <input maxLength={15} required placeholder="Player two" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}/>
        <button type="submit">Start Game</button>
      </Container>
    </Modal>
  )
}