var assert = require('chai').assert;
// Declaring Board State
var board = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

var board2 = [
  [false, false, false],
  [false, true, false],
  [false, false, false],
];

var board3 = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
];

var board4 = [
  [true, false, false],
  [false, true, false],
  [false, false, true],
];

var cellState = false;
var neighbors = [];

var conway = {
  neighborsOf: function (board,x,y){
    if (x === 0 && y === 0){
      neighbors = [board[0][1], board[1][0], board[1][1]];
    }
    if (x === 0 && y === 1){
      neighbors = [board[0][0], board[1][0], board[1][1], board[1][2],
      board[0][2]];
    }
    if (x === 0 && y === 2){
      neighbors = [board[0][1], board[1][1], board[1][2]];
    }
    if (x === 1 && y === 0){
      neighbors = [board[0][0], board[0][1], board[2][0], board[2][1],
      board[2][0]];
    }
    if (x === 1 && y === 1){
      neighbors = [board[0][0], board[1][0], board[2][0], board[1][2],
      board[0][2], board[2][1], board[0][1], board[2][2]];
    }
    if (x === 1 && y === 2){
      neighbors = [board[0][1], board[0][2], board[1][1], board[2][1],
      board[2][2]];
    }
    if (x === 2 && y === 0){
      neighbors = [board[1][0], board[1][1], board[2][1]];
    }
    if (x === 2 && y === 1){
      neighbors = [board[2][0], board[1][0], board[1][1], board[1][2],
      board[2][2]];
    }
    if (x === 2 && y === 2){
      neighbors = [board[2][1], board[1][1], board[1][2]];
    }
    return neighbors;
  },

  rules: function(cell, neighbors){
    var liveCells = 0;
    neighbors.forEach(function(value, index){
      if(value === true){
        liveCells++;
      }
      if(cell === true){
        if(liveCells < 2){
          cellState = false;
        }
        else if(liveCells < 4){
          cellState = true;
        }
        else if(liveCells > 3){
          cellState = false;
        }
      } else {
        if(liveCells === 3){
          cellState = true;
        } else{
          cellState = false;
        }
      }
    });
    return cellState;
  },
  tick: function(board){
    var newBoard = [];

    board.forEach(function(value, index){
      value.forEach(function(x,y){
        newBoard.push(conway.rules(board[index][y], conway.neighborsOf(board, index, y)));
      });
    });
    var row1 = newBoard.splice(0,3);
    var row2 = newBoard.splice(0,3);
    board = [row1, row2, newBoard];
    return board;
  }
}

neighbors.forEach(conway.rules);

describe('conway.neighborsOf', function(){
  it('should return an array of neighbor values given a cell', function(){
    assert.deepEqual(conway.neighborsOf(board, 0, 0), ([board[0][1], board[1][0], board[1][1]]));
  });
});

describe('conway.conway', function(){
  it('should return the value of a cell based on its neighbors', function(){
    assert.equal(conway.rules(board[0][0], [board[0][1], board[1][0], board[1][1]]), false);
  });
});
describe('conway.tick', function(){
  it('should return a new board after applying rules from conway', function(){
    assert.deepEqual(conway.tick([
      [false, false, false],
      [false, false, false],
      [false, false, false],
      ]), conway.tick(board2));
  });
});
