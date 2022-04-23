import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/global';
import { GameBoard } from './components/GameBoard';
import { BoardContainer, LeaderboardContainer, Container } from './styles/styles';
import { Leaderboard } from './components/Leaderboard';
import { RegisterNewRoundModal } from './components/RegisterNewRoundModal';
import Modal from 'react-modal';
import { possibleWinningPositions } from './utils/constants';

Modal.setAppElement('#root');

interface Leaderboard {
  winner?: string;
  result?: string;
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isRegisterNewRoundModalOpen , setIsRegisterNewRoundModalOpen] = useState<boolean>(true);
  const [isPlayerOneNext, setIsPlayerOneNext] = useState<boolean>(true);
  const [ result, setResult ] = useState<Leaderboard>({});
  const [ leaderboard, setLeaderboard ] = useState<Leaderboard[]>([]);

  useEffect(() => {
    checkWin();
    checkIfTie();
  }, [board])

  useEffect(() => {
    if(result.result) {
      const newLeaderBoard = [...leaderboard, result];
      setLeaderboard(newLeaderBoard)
    }
  }, [result])

  const restartGame = () => {
    setIsPlayerOneNext(true)
    setResult({});
    setBoard(Array(9).fill(""))
    localStorage.clear();
    setIsRegisterNewRoundModalOpen(!isRegisterNewRoundModalOpen)
  }

  const handleClick = (i : number) => {
    const currentBoard = [...board];
    if(currentBoard[i] !== "") return;
    currentBoard[i] = isPlayerOneNext ? "X" : "O";
    setBoard(currentBoard);
    setIsPlayerOneNext(!isPlayerOneNext);
  };

  const handleCloseNewTransactionModal = () => {
    setIsRegisterNewRoundModalOpen(false);
  }

  const checkWin = () => {
    possibleWinningPositions.forEach((currentPattern) => {
      debugger
      const currentPlayer = board[currentPattern[0]];
      if (currentPlayer === "") return;
      let foundWinningPattern = true;
      currentPattern.forEach((idx) => {
        if (board[idx] !== currentPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        const players = JSON.parse(localStorage.getItem("Players") || '{}') ;
        setResult({ winner: isPlayerOneNext ? players.playerTwo : players.playerOne, result: "Win" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", result: "Tie" });
    }
  };

  return (
    <Container>
      <BoardContainer>
        <GameBoard squares={board} onClick={handleClick}/>
        {result?.result && 
            <div className="results">
              <p>Result: {result.result}</p>
              <p>Winner: {result.winner}</p>
              <button type="button" onClick={restartGame}>Restart Game</button>
            </div>
          }
      </BoardContainer>
      <LeaderboardContainer>
        <Leaderboard leaderboard={leaderboard}/>
      </LeaderboardContainer>
      <GlobalStyle />
      <RegisterNewRoundModal isOpen={isRegisterNewRoundModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
    </Container>
  );
}

export default App;
