import React from 'react';
import { Container } from './styles'
import { Square } from '../Square'
import { GameBoardProps } from './interface'

export const GameBoard = ({ squares, onClick } : GameBoardProps) => (
  <Container>
    {
      React.Children.toArray(
        squares.map((square : string, i : number) => (
          <Square idx={i} value={square} onClick={() => onClick(i)} />
          )
        )
      )
    }
  </Container>
)