import { Button } from "./styles"
import { SquareProps } from "./interface"

export const Square = ({ value, onClick } : SquareProps) => (
  <Button onClick={onClick}><p className={value && 'selected'}>{value}</p></Button>
)