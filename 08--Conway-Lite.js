var assert = require('assert');

function test(actual, expected, success){
  if(success === undefined)
    success = 'Winner';
  assert.strictEqual(actual, expected);
  console.log(success)
}

var board = [
 [false, true, false],
 [false, true, false],
 [false, true, false],
];

var board1 = [
  [false, false, false],
  [true, true, true],
  [false, false, false],
];

var board2 = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

var board3 = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

function neighborsOf(board, x, y){
  // Input board = x y coordinates
  // Output list of neighbor cells
var neighbors;

  if (x === 0 && y === 0){
    neighbors = [board[0][1], board[1][1], board[1][0]];
    return neighbors;
  }
  if(x === 0 && y === 1){
    neighbors = [board[0][0], board[0][2], board[1][0],
                 board[1][1], board[1][2]];
    return neighbors;
  }
  if(x === 0 && y === 2){
    neighbors = [board[0][1], board[1][2], board[1][1]];
    return neighbors;
  }
  if (x === 1 && y === 0){
    neighbors = [board[0][0], board[0][1], board[1][1],
                 board[2][1], board[2][0]];
    return neighbors;
  }
  if(x === 1 && y === 1){
    neighbors = [board[0][0], board[0][1], board[0][2],
                 board[1][0], board[1][2], board[2][0],
                 board[2][1], board[2][2]];
    return neighbors;
  }
  if(x === 1 && y === 2){
    neighbors = [board[0][2], board[0][1], board[1][1],
                 board[2][1], board[2][2]];
    return neighbors;
  }
  if (x === 2 && y === 0){
    neighbors = [board[1][0], board[1][1], board[2][1]];
    return neighbors;
  }
  if(x === 2 && y === 1){
    neighbors = [board[1][0], board[1][1], board[1][2],
                 board[2][0], board[2][2]];
    return neighbors;
  }
  if(x === 2 && y === 2){
    neighbors = [board[1][1], board[1][2], board[2][1]];
    return neighbors;
  }

}

function conway(board,x,y){
  // Input: Cell
  // Output: Neighbors and cell with rules applied
  var livingCell = 0;
  var neighbors = neighborsOf(board,x,y);
  var newCell;
  var status = board[x][y];

  for(var i = 0; i < neighbors.length; i++){
    if(neighbors[i] === true){
      livingCell++;
    }
  }
    if (status === true){
      // Rule #1
      if (livingCell < 2) {
        newCell = false;
      }
      // Rule #2
      if (livingCell === 2 || livingCell === 3) {
        newCell = true;
      }
      // Rule #3
      if (livingCell > 3){
        newCell = false;
      }
      // Rule #4
      } else {
        if (livingCell === 3){
          newCell = true;
        } else {
          newCell = false;
        }
      }
       return newCell;

}

function tick(board){
  // Input: board
  // Output: newBoard
  var newBoard = new Array(3);
  console.log(board);
  console.log('***************************')
  for (var i = 0; i<board.length; i++){
    newBoard[i] = new Array(3);
    for (var j = 0; j<board[i].length; j++){
      newBoard[i][j]=conway(board,i,j)
      // newBoard.push = ([i,j]);
      // newBoard.push = ([i,j]);
      // newBoard.push = ([i,j]);
      // console.log(newBoard,[i,j]);
    }
  }
  return newBoard;
}

 console.log(tick(board));
// console.log(tick(board1));
// console.log(tick(board2));
// console.log(tick(board3));

// console.log(conway(board,0,0));
// console.log(conway(board,0,1));
// console.log(conway(board,0,2));
// console.log(conway(board,1,0));
// console.log(conway(board,1,1));
// console.log(conway(board,1,2));
// console.log(conway(board,2,0));
// console.log(conway(board,2,1));
// console.log(conway(board,2,2));

// console.log(neighborsOf(board,0,0));
// console.log(neighborsOf(board,0,1));
// console.log(neighborsOf(board,0,2));
// console.log(neighborsOf(board,1,0));
// console.log(neighborsOf(board,1,1));
// console.log(neighborsOf(board,1,2));
// console.log(neighborsOf(board,2,0));
// console.log(neighborsOf(board,2,1));
// console.log(neighborsOf(board,2,2));
