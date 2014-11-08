var Chess = module.exports.Chess = function Chess(){
  this.board = [];
};

module.exports.Position = Position;
module.exports.Piece = Piece;
var _=require('lodash');

function Chess(){

}

Chess.prototype.pieceAt = function(x,y){
  return new Piece('Rook', 'Black');
};

/**
 * @constructor Chess: Setup a board with Pieces representing an initial chessboard.
 *
 * @method getPlayer()
 * @return String either 'white' or 'black' representing current player
 * @method move(piece, destination): Move piece to destination and
 * @param Piece piece to move
 * @param Position destination to move piece to
 * @method opening(): Advance the board to [Catalan Opening, Closed Variation]
 */

function Position(x,y){
  this.x = x;
  this.y = y;
}

function Piece(name, color){
  this.name = name;
  this.color = color;
}

Piece.prototype.getName = function(){
  return this.name;
};

Piece.prototype.setPosition = function(position){
  return this.position = position;
};

/**
 * @method display()
 *
 * @return String representation of board
 */

Chess.prototype.display = function(){
   var spacer = "  +---+---+---+---+---+---+---+---+",
 board = [
    "    a   b   c   d   e   f   g   h", spacer
 ],
 numRows =8, numCols =8;
 _.times(numRows, function(row){
   var rank = (row + 1);
   if(rank == 1){
     board.push('1 | r | n | b | q | k | b | n | r |');
   }else if(rank == 2){
     board.push('2 | p | p | p | p | p | p | p | p |');
   }else if(rank == 7){
     board.push('7 | P | P | P | P | P | P | P | P |');
   }else if(rank == 8){
     board.push('8 | R | N | B | Q | K | B | N | R |');
   }else{
     board.push(rank + ' | ' + _.times(numCols, function(cols){
       return '';
     }).join(' | ') + ' | ');
   }
   board.push(spacer);
 });
 return board.join("\n");
};
