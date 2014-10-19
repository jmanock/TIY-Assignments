// Chess Game
 module.exports = Chess;
  // Setup a board with Pieces repesenting an initial chessboard.
  function Chess(){

  }
  // @return String either 'white' or 'black' representing current player
 Chess.prototype.getPlayer = function(){
   return 'black';
 }

 Chess.prototype.move = function(piece, destination){

 }
 // Advance the 'board' to Catalan Opening, Closed variation
 Chess.prototype.opening = function(){

 }
 // @return: String representation of board
 Chess.prototype.display = function(){

 }
 // Represent a position on a chessboard with coordinates
 // usage: new Position(1,1)
 // @property: Number x coordinate
 // @property: Number y coordinate
 function Position(x,y){

 }
 // Represent a chesspiece on the board with name and color and appropriate starting position
 // @usage: new Piece('Queen', 'black')
 function Piece(name, color){
   piece = {'Queen':'black', 'Pawn':'black', 'Knight':'black',
   'Rooke':'black', 'King':'black', 'Bishop':'black',
   'queen':'white', 'pawn':'white', 'knight':'white',
   'rook':'white', 'king':'white', 'bishop':'white'}
   return piece[color];
 }

 // @return: String name of Piece, e.g. 'Queen', 'Pawn'
 Piece.prototype.getName = function(){
   getName = {'q':'queen', 'Q':'Queen', 'p': 'pawn', 'P':'Pawn',
   'n':'knight', 'N':'Knight', 'b':'bishop', 'B':'Bishop',
   'r':'rook', 'R':'Rook', 'k':'king', 'K':'King'}
   return getName[x];
 }
 // @return: String player 'black' or 'white'
 Piece.prototype.getColor = function(){

 }
 // Set piece to position on board
 Piece.prototype.setPosition = function(position){

 }
 // @return: String representation of Piece
 Piece.prototype.toString = function(){

 }
 console.log(Piece.prototype.getName('q'));
