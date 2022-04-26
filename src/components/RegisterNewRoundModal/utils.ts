export const validateErrors = (playerOne : string, playerTwo : string) => {
  const errors = {
    error: false,
    playerOneInputErrorMessage: '',
    playerTwoInputErrorMessage: '',
  }

  if(!playerOne) {
    errors.playerOneInputErrorMessage = 'Players must have a name!'
    errors.error = true
  }

  if(!playerTwo) {
    errors.playerTwoInputErrorMessage = 'Players must have a name!'
    errors.error = true
  }

  if(playerOne === playerTwo && playerOne !== '') {
    errors.playerOneInputErrorMessage = 'Players cannot have the same name!'
    errors.playerTwoInputErrorMessage = 'Players cannot have the same name!'
    errors.error = true
  }

  return errors
}