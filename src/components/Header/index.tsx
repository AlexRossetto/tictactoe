import { Container } from "./styles";
import { HeaderProps } from "./interface";


export const Header = ({isPlayerOneNext} : HeaderProps) => {

  const players = JSON.parse(localStorage.getItem('Players') || '{}');

  return (
    <Container>
      <h1>Tic Tac Toe</h1>
      {players.playerOne && <h3 id="currentPlayerTurn">{isPlayerOneNext ? `${players?.playerOne}'s Turn` : `${players?.playerTwo}'s Turn`}</h3>
}    </Container>
  )
}