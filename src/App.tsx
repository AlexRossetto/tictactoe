import React, { useCallback, useEffect, useState } from 'react';
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
import { INITIAL_RESULT_STATE, INITIAL_PLAYERS_STATES } from './utils/constants';
import { Players } from './components/RegisterNewRoundModal/interface'

Modal.setAppElement('#root');

export const App = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isRegisterNewRoundModalOpen, setIsRegisterNewRoundModalOpen] = useState<boolean>(true);
  const [isGameResultModalOpen, setIsGameResultModalOpen] = useState<boolean>(false)
  const [isPlayerOneNext, setIsPlayerOneNext] = useState<boolean>(true);
  const [result, setResult] = useState<LeaderboardType>(INITIAL_RESULT_STATE);
  const [leaderboard, setLeaderboard] = useState<LeaderboardType[]>([]);
  const [round, setRound] = useState<number>(1)
  const [players, setPlayers] = useState<Players>(INITIAL_PLAYERS_STATES)
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

  const checkIfGameEnded = () => {
    const hasWinner = checkWin(board);
    if(!hasWinner) {
      const isTie = checkIfTie(result, isBoardFilled);
      if(isTie) {
        setResult({ winner: null, result: 'Tie', round: round });
        setIsGameResultModalOpen(true);
      }   
    } else {
      setTimeout(() => {
        setResult({
          winner: isPlayerOneNext ? players.playerTwo : players.playerOne,
          result: 'Win',
          round: round
        });
        setIsGameResultModalOpen(true);
      }, 200);
    }
  }

  const restartGame = useCallback(() => {
    setIsPlayerOneNext(true)
    setResult(INITIAL_RESULT_STATE);
    setBoard(Array(9).fill(""))
    localStorage.clear();
    setRound(round+1)
    setIsRegisterNewRoundModalOpen(true);
    setPlayers({ playerOne: null, playerTwo: null })
  }, []) 

  const handleClick = (i : number) => {
    const currentBoardCopy = [...board];
    if(currentBoardCopy[i] !== "" || result.result) return;
    currentBoardCopy[i] = isPlayerOneNext ? "X" : "O";
    setBoard(currentBoardCopy);
    setIsPlayerOneNext(!isPlayerOneNext);
  };
  
  const handleCloseNewTransactionModal = () => {
    setIsRegisterNewRoundModalOpen(false);
  }

  const handleCloseGameResultModal = () => {
    setIsGameResultModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header isPlayerOneNext={isPlayerOneNext} players={players}/>
      <Container>
        <BoardContainer>
          <GameBoard squares={board} onClick={handleClick}/>
        </BoardContainer>
        <LeaderboardContainer>
          <Leaderboard leaderboard={leaderboard}/>
        </LeaderboardContainer>
        <RegisterNewRoundModal 
          isOpen={isRegisterNewRoundModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
          players={players}
          setPlayers={setPlayers}
        />
        <GameResultModal 
          isOpen={isGameResultModalOpen} 
          onRequestClose={handleCloseGameResultModal}
          result={result}
          restartGame={restartGame}
        />
      </Container>
    </>
  );
}