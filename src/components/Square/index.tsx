import { Button } from "./styles"
import { SquareProps } from "./interface"

export const Square = ({ value, onClick, idx } : SquareProps) => (
  <Button id={`${idx}`} onClick={onClick}>
    <span className={value && 'selected'}>{value}</span>
  </Button>
)