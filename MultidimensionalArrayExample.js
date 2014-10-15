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

//
//
//
// console.log(board.join('\n')+'\n\n');
//
// // Move King's Pawn forward 2 spots
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// // console.log(board.join('\n')+'\n\n');
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

var ChessBoard = {
   move: function(a,b,c,d){
    board[a][b] = board[c][d];
    board[c][d] = ' ';
     return board;
   }
}

var whiteMove1 = ChessBoard.move(4,3,6,3),
  blackMove1 = ChessBoard.move(2,4,0,6),
  whiteMove2 = ChessBoard.move(4,2,6,2),
  blackMove2 = ChessBoard.move(2,3,1,3),
  whiteMove3 = ChessBoard.move(5,6,6,6),
  blackMove3 = ChessBoard.move(3,3,1,3),
  whiteMove4 = ChessBoard.move(6,6,7,5),
  blackMove4 = ChessBoard.move(1,4,0,5),
  whiteMove5 = ChessBoard.move(5,5,7,6);

console.log(whiteMove5.join('\n'));
