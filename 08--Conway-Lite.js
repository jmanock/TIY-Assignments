var assert = require('assert');

// Board Variables
var board = [
 [false, true, false],
 [false, true, false],
 [false, true, false],
];

var board1 = [
  [true, false, false],
  [false, true, false],
  [false, false, true],
];

var board2 = [
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

function conway(cell,neighbors){
  // Input: Cell
  // Output: Neighbors and cell with rules applied
  var alive = 0;
alive = neighbors.filter(function(neighbor){
  return neighbor;
});
  if(cell && alive ===2 ){
    return true;
  }
  if(alive === 3){
    return true;
  }
  return false;
}

function tick(before){
  // Input: Board Variable
  // Output: New Board passed threw Conway function
var after = board();
before.forEach(function(fow,x){
  row.forEach(function(cell,x,y){
    console.log(cell,row,x,y);
    });
  });
}
function test(board){
  // Input: Function Call
  // Output: New Boards with style
  var newTest = tick(before);
  console.log('**************************');
  console.log(board);
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
  console.log(newTest);

}




 test(board);
// test(board2);
// test(board1);

// console.log(tick(board));
// console.log(tick(board1));
// console.log(tick(board2));

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
