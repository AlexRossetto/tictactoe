import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { RegisterNewPlayersModalProps } from './interface';

export const RegisterNewRoundModal = ({ isOpen, onRequestClose } : RegisterNewPlayersModalProps) => {

  const [playerOne, setPlayerOne] = useState<string>('');
  const [playerTwo, setPlayerTwo] = useState<string>('');

  function handleStartNewGame(e: FormEvent) {
    e.preventDefault();
    console.log('Tá clicando nao?')
    debugger
    if(playerOne === playerTwo) {
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
        <input id="playerOne" maxLength={15} required placeholder="Player One" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}/>
        <input id="playerTwo" maxLength={15} required placeholder="Player Two" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}/>
        <button type="submit">Start Game</button>
      </Container>
    </Modal>
  )
}