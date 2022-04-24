import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/global';
import { GameBoard } from './components/GameBoard';
import { BoardContainer, LeaderboardContainer, Container } from './styles/styles';
import { Header } from './components/Header';
import { Leaderboard } from './components/Leaderboard';
import { RegisterNewRoundModal } from './components/RegisterNewRoundModal';
import { GameResultModal } from './components/GameResultModal';
import Modal from 'react-modal';
import { LeaderboardType } from './components/Leaderboard/interface';
import { checkWin, checkIfTie } from './utils/helpers';
import { INITIAL_RESULT_STATE } from './utils/constants';

Modal.setAppElement('#root');

export const App = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isRegisterNewRoundModalOpen , setIsRegisterNewRoundModalOpen] = useState<boolean>(true);
  const [isGameResultModalOpen, setIsGameResultModalOpen] = useState<boolean>(false)
  const [isPlayerOneNext, setIsPlayerOneNext] = useState<boolean>(true);
  const [result, setResult] = useState<LeaderboardType>(INITIAL_RESULT_STATE);
  const [leaderboard, setLeaderboard] = useState<LeaderboardType[]>([]);
  const isBoardFilled = !board.includes("");

  useEffect(() => {
    checkIfGameEnded();
  }, [board])

  useEffect(() => {
    if(result.result) {
      const newLeaderBoard = [...leaderboard, result];
      setLeaderboard(newLeaderBoard)
    }
  }, [result])

  const handleClick = (i : number) => {
    if(result.result) return;
    const currentBoardCopy = [...board];
    if(currentBoardCopy[i] !== "") return;
    currentBoardCopy[i] = isPlayerOneNext ? "X" : "O";
    setBoard(currentBoardCopy);
    setIsPlayerOneNext(!isPlayerOneNext);
  };

  
  const checkIfGameEnded = () => {
    const hasWinner = checkWin(board);
    if(!hasWinner) {
      checkIfTie(result, isBoardFilled, setResult, setIsGameResultModalOpen);
    } else {
      const players = JSON.parse(localStorage.getItem('Players') || '{}');
      setResult({
        winner: isPlayerOneNext ? players.playerTwo : players.playerOne,
        result: 'Win',
      });
      setIsGameResultModalOpen(true);
    }
  }
  
  const handleCloseNewTransactionModal = () => {
    setIsRegisterNewRoundModalOpen(false);
  }

  const handleCloseGameResultModal = () => {
    setIsGameResultModalOpen(false);
  }

  return (
    <>
    <Header isPlayerOneNext={isPlayerOneNext}/>
    <Container>
      <GlobalStyle />
      <BoardContainer>
        <GameBoard squares={board} onClick={handleClick}/>
      </BoardContainer>
      <LeaderboardContainer>
        <Leaderboard leaderboard={leaderboard}/>
      </LeaderboardContainer>
      <RegisterNewRoundModal isOpen={isRegisterNewRoundModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GameResultModal 
        isOpen={isGameResultModalOpen} 
        onRequestClose={handleCloseGameResultModal}
        result={result}
        setIsPlayerOneNext={setIsPlayerOneNext}
        setResult={setResult}
        setIsRegisterNewRoundModalOpen={setIsRegisterNewRoundModalOpen}
        setBoard={setBoard}
      />
    </Container>
    </>
  );
}