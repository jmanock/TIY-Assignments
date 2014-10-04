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

function conway(board, x, y){
  // Input state of the cell and neighbor cells
  // Output the state of the cell and what happenes to the neighbors

  var cell = [x,y];
  var neighbor = neighborsOf(board,x,y);
  var liveNeighbor = 0;
  var status = board[x][y];

  for(var i = 0; i < neighbor.length; i++){
    if (neighbor[i] == true){
      liveNeighbor++;
    }
  }
  console.log('Cell ' + cell + ' is '+ status +' and has '
              + liveNeighbor +  ' live neighbors.');
  // Rule #1
  if(liveNeighbor < 2){
    liveNeighbor = false;
  }
  // Rule #2
  if(liveNeighbor === 2){
    liveNeighbor = true;
  }
  // Rule #3
  if(liveNeighbor >3){
    liveNeighbor = false;
  }
  // Rule #4
  if(status === false && liveNeighbor === 3){
    status = true;
    liveNeighbors = false;
  }
  return ('The cell is '+ status +' and the neighbors are '+ liveNeighbor +'.');
 }

function neighborsOf(board, x, y){
  // Input board = x y cordinates
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

function tick(){
  // Input the board
  // Output new board the next generation


}

// function newBoard(){
//    return [
//         [ false, false, false ],
//         [ false, false, false ],
//         [ false, false, false ],
//     ];
// }


 console.log('still working?x?')
// console.log(neighborsOf(board,1,2));
// console.log(neighborsOf(board,1,1));
// console.log(neighborsOf(board,0,1));
// console.log(neighborsOf(board,0,2));
// console.log(neighborsOf(board,1,0));
// console.log(neighborsOf(board,1,1));
// console.log(neighborsOf(board,1,2));
// console.log(neighborsOf(board,2,0));
// console.log(neighborsOf(board,2,1));
// console.log(neighborsOf(board,2,2));
// console.log(board[0][0]);
// console.log(board[0][1]);
// console.log(board[1][0]);
// console.log(board);
// console.log(board[1][1]);
console.log(conway(board,1,0));
console.log(conway(board,1,1));
