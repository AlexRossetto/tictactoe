import { Button } from "./styles"
import { SquareProps } from "./interface"

export const Square = ({ value, onClick } : SquareProps) => (
  <Button onClick={onClick}><span className={value && 'selected'}>{value}</span></Button>
)