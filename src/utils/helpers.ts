import { possibleWinningPositions } from "./constants";

// export function checkGameResult(board  : any[]) {
//   debugger
//   let filled = true;
//   board.forEach((spot : any) => { if(spot === '') filled = false })

//   if(filled) {
//     return { result: 'tie' }
//   }
  
//   possibleWinningPositions.forEach((curr) => {
//     const firstPlayer = board[curr[0]];
//     if(firstPlayer == '') return;
//     let foundWinningPattern = true;
//     curr.forEach((i: any) => {
//       if(board[i] != firstPlayer) {
//         foundWinningPattern = false;
//       }
//     })

//     if(foundWinningPattern) {
//       return { result: 'win' }
//     }
//   })
// }

export function checkGameResult(board  : any[]) {
  debugger
  let filled = true;
  board.forEach((spot : any) => { if(spot === '') filled = false })

  if(filled) {
    return { result: 'tie' }
  }
  
  possibleWinningPositions.forEach((currPattern) => {
    debugger
    let foundWinningPattern = true;
    currPattern.forEach((idx) => {
      if (board[idx] != currPattern) {
        foundWinningPattern = false;
      }
    });

    if (foundWinningPattern) {
      return { result: 'win' };
    }
  });
}