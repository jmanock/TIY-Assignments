// Chess Game
/*
 * @constructor Chess: Setup a board with Pieces representing an          initial chessboard.
 *    @method: getPlayer()
 *    @return: String either "white" or "black" representing current player
 *    @method: display()
 *    @return: String representation of board
 *    @method: move(piece, destination): Move piece to destination and....?
 *    @param: Piece piece to move
 *    @param: Position destination to move piece to
 *    @method opening(): Advance the board to Catalan Opening, Closed Variation
 *@constructor Position(x,y): Represent a position on a chessboard with coordinates
 *  usage: new Position(1,1)
 *    @property: Number x coordinate
 *    @property: Number y coordinate
 *@construction Piece(name,color): Represent a chesspiece on the board with name and color and appropriate starting position
 *  usage: new Piece('Queen', 'black')
 *    @method: getName()
 *    @return: String name of Piece, e.g. 'Queen', 'Pawn'
 *    @method: getColor()
 *    @return: String player 'black' or 'white'
 *    @method: setPosition(position): Set piece to position on board
 *    @param: Position position
 *    @method: toString()
 *    @return: String representation of Piece
 *      example: "Q" === String(new Piece("Queen", "white"))
 *      example: "r" === String(new Piece("Rook", "black"))
 */

 module.exports = Chess;
 function Piece(){

 }
 function Position(x,y){
   
 }

 function Chess(){
   this.board = [
   ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
   ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
   [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
   [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
   [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
   [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
   ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
   ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
   ];
 }

 Chess.prototype.move = function(a,b,c,d){
   this.board[a][b] = this.board[c][d];
   this.board[c][d] = ' ';
   return this.board;
 }

 Chess.prototype.display = function(){
   console.log(this.board);
 }
Chess.prototype.getPlayer = function(){
  if(piece === piece.toLowerCase()){
    return 'white';
  }
  return 'black';
}
 var game = new Chess;
 var w1 = game.move(4,2,6,2);
 console.log(w1);


Chess
Position(x,y)
Piece
