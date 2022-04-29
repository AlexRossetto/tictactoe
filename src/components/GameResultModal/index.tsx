import { useCallback } from 'react';
import Modal from 'react-modal';
import { Container } from './styles'
import { GameResultModalProps } from './interface';

export const GameResultModal = ({
    isOpen, 
    onRequestClose, 
    result, 
    restartGame
  } : GameResultModalProps) => {

  const handleSubmit = () => {
    restartGame();
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
      id="gameResultModal"
    >
      <Container onSubmit={handleSubmit}>
        <h2>Result: <strong>{result.result}</strong></h2>
        {result.winner && 
          <h2>Winner: {result.winner}</h2>
        }
        <button type="submit">Restart Game</button>
      </Container>
    </Modal>
  )
}