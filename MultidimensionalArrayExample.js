var assert = require('chai').assert;

var board = [
['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], // 0
['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], // 1
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 2
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 3
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 4
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // 5
['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'], // 6
['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']  // 7
];
//0   1    2    3    4    5    6    7

var moves = {
  step1: function(){
    board[4][3] = board[6][3];
    board[6][3] = ' ';
  },
  step2: function(){
    board[3][3] = board[1][3];
    board[1][3] = ' ';
  },
  step3: function(){
    board[5][5] = board[7][6];
    board[7][6] = ' ';
  },
  step4: function(){
    board[2][4] = board[1][4];
    board[1][4] = ' ';
  },
  step5: function(){
    board[5][6] = board[6][6];
    board[6][6] = ' ';
  },
  step6: function(){
    board[1][4] = board[0][5];
    board[0][5] = ' ';
  },
  step7: function(){
    board[4][2] = board[6][2];
    board[6][2] = ' ';
  },
  step8: function(){
    board[2][5] = board[0][6];
    board[0][6] = ' ';
  },
  step9: function(){
    board[6][6] = board[7][5];
    board[7][5] = ' ';
  }
}
// console.log(board.join('\n')+'\n\n');
//

// // Knight 'N' moved up two over one
// // [0][6] to [2][5]
// board[2][4] = board[0][6];
// board[0][6] = ' ';
// // console.log(board.join('\n')+'\n\n');
//
// // Pawn 'p' moved two spaces up
// // [6][2] to [3][4]
// board[4][2] = board[6][2];
// board[6][2] = ' ';
// // console.log(board.join('\n')+'\n\n');
//
// // Pawn 'P' moved up one space
// // [1][3] to [2][3]
// board[2][3] = board[1][3];
// board[1][3] = ' ';
// // console.log(board.join('\n')+'\n\n');
//
// // Pawn 'p' moved two spaces up
// // [6][6] to [5][6]
// board[5][6] = board[6][6];
// board[6][6] = ' ';
// // console.log(board.join('\n')+'\n\n');
//
// // Pawn 'P' moved two spaces up
// // [1][2] to [3][2]
// board[3][2] = board[1][2];
// board[1][2] = ' ';
// // console.log(board.join('\n')+'\n\n');
//
// // Bishop 'b' moved up one diagonally to the right
// // [7][5] to [6][6]
// board[6][6] = board[7][5];
// board[7][5] = ' ';
// // console.log(board.join('\n')+'\n\n');
//
// // Bishop 'B' moved up one diagonally to the right
// // [0][5] to [1][4]
// board[1][4] = board[0][5];
// board[0][5] = ' ';
// // console.log(board.join('\n')+'\n\n');
//
// // Knight moved up two over one left
// // [7][6] to [5][5]
// board[5][5] = board[7][6];
// board[7][6] = ' ';
// // console.log(board.join('\n')+'\n\n');

// var ChessBoard = {
//    move: function(a,b,c,d){
//     board[a][b] = board[c][d];
//     board[c][d] = ' ';
//      return board;
//    }
// }
//
// var whiteMove1 = ChessBoard.move(4,3,6,3),
//   blackMove1 = ChessBoard.move(2,4,0,6),
//   whiteMove2 = ChessBoard.move(4,2,6,2),
//   blackMove2 = ChessBoard.move(2,3,1,3),
//   whiteMove3 = ChessBoard.move(5,6,6,6),
//   blackMove3 = ChessBoard.move(3,3,1,3),
//   whiteMove4 = ChessBoard.move(6,6,7,5),
//   blackMove4 = ChessBoard.move(1,4,0,5),
//   whiteMove5 = ChessBoard.move(5,5,7,6);

//console.log(whiteMove5.join('\n'));

describe('Testing the board state', function(){
  it('move 1: pawn at board[4][3]', function(){
    moves.step1();
    assert.deepEqual(board,
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', ' ', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ] );
  });
  it('Move 2: should be a be a pawn at board[3][3]', function(){
    moves.step2();
    assert.deepEqual(board,
    [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', ' ', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'P', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'p', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', ' ', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'] ]
   );
  });
  it('Move 3: should look like this', function(){
    moves.step3();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('should look like this after "Move 4"', function(){
    moves.step4();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('Should look like this after "Move 5"', function(){
    moves.step5();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ',' ','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p','p',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('Should look like this after "Move 6"', function(){
    moves.step6();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ','N','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p','p',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('Should look like this after "Move 7"', function(){
    moves.step7();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ','N','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('Should look like this after "Move 8"', function(){
    moves.step8();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p',' ','p'],
      ['r','n','b','q','k','b',' ','r'] ]
    );
  });
  it('Should look like this after "Move 9"', function(){
    moves.step9();
    assert.deepEqual(board,
      [
      ['R','N','B','Q','K',' ',' ','R'],
      ['P','P','P',' ','B','P','P','P'],
      [' ',' ',' ',' ','P','N',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ','p','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','n','p',' '],
      ['p','p',' ',' ','p','p','b','p'],
      ['r','n','b','q','k',' ',' ','r'] ]
    );
  });
});
