import { INITIAL_RESULT_STATE } from '../constants';
import { checkIfTie, checkWin } from '../helpers';
import { fullWinningBoard, nonWinningBoard } from '../constants';





describe('Tests functions that check the round result' , () => {
  it('Should receive a full board with a winning condition and return true', () => {
    const isWin = checkWin(fullWinningBoard);
    expect(isWin).toBe(true);
  })

  it('Should receive a non winning board and return false', () => {
    const isWin = checkWin(nonWinningBoard)
    expect(isWin).toBe(false);
  })

  it("Should receive a full board with no winning conditions and return true", () => {
    expect(checkIfTie(INITIAL_RESULT_STATE, true)).toBe(true);
  })

  it("Should receive a non filled board with no winning conditions and return false", () => {
    expect(checkIfTie(INITIAL_RESULT_STATE, false)).toBe(false);
  })
})