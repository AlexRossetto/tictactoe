import { Container } from './styles'
import { Square } from '../Square'
import { GameBoardProps } from './interface'
import { nanoid } from 'nanoid'

export const GameBoard = ({ squares, onClick } : GameBoardProps) => (
  <Container>
    {squares.map((square : string, i : number) => (
      <Square idx={i} key={nanoid()} value={square} onClick={() => onClick(i)} />
    ))}
  </Container>
)