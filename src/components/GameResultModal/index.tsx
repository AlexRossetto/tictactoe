import Modal from 'react-modal';
import { Container } from './styles'
import { GameResultModalProps } from './interface';
import { INITIAL_RESULT_STATE } from '../../utils/constants';

export const GameResultModal = ({ isOpen, onRequestClose, result, setIsPlayerOneNext, setResult, setBoard, setIsRegisterNewRoundModalOpen } : GameResultModalProps) => {

  const restartGame = () => {
    setIsPlayerOneNext(true)
    setResult(INITIAL_RESULT_STATE);
    setBoard(Array(9).fill(""))
    localStorage.clear();
    setIsRegisterNewRoundModalOpen(true);
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
      <Container onSubmit={restartGame}>
          <h2>Result: <strong>{result.result}</strong></h2>
          {result.winner && <h2>Winner: {result.winner}</h2>}
          <button type="button" onClick={restartGame}>Restart Game</button>
      </Container>
    </Modal>
  )
}