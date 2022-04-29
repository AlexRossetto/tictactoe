import { useCallback } from 'react';
import Modal from 'react-modal';
import { Container } from './styles'
import { GameResultModalProps } from './interface';
import { INITIAL_RESULT_STATE } from '../../utils/constants';

export const GameResultModal = ({
    isOpen, 
    onRequestClose, 
    result, 
    setIsPlayerOneNext, 
    setResult, 
    setBoard, 
    setIsRegisterNewRoundModalOpen, 
    setRound, 
    setPlayers,
    round
  } : GameResultModalProps) => {

  const restartGame = useCallback(() => {
    setIsPlayerOneNext(true)
    setResult(INITIAL_RESULT_STATE);
    setBoard(Array(9).fill(""))
    localStorage.clear();
    setRound(round+1)
    setIsRegisterNewRoundModalOpen(true);
    setPlayers({ playerOne: null, playerTwo: null })
    onRequestClose();
  }, [result]) 
  
  
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
      <Container onSubmit={restartGame}>
        <h2>Result: <strong>{result.result}</strong></h2>
        {result.winner && 
          <h2>Winner: {result.winner}</h2>
        }
        <button type="button" onClick={restartGame}>Restart Game</button>
      </Container>
    </Modal>
  )
}