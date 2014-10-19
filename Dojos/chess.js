// Chess Game
 module.exports = Chess;
 var _= require('lodash');
 var board = [
 [' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ']
 ];
  // Setup a board with Pieces repesenting an initial chessboard.
  function Chess(){
    this.Q = new Piece('Queen','black');
    this.Q.setPosition(0,3);
    this.q = new Piece('Queen','white');
    this.q.setPosition(7,3);
    this.K = new Piece('King','black');
    this.K.setPosition(0,4);
    this.k = new Piece('King','white');
    this.k.setPosition(7,4);
    this.B = new Piece('Bishop','black');
    this.B.setPosition(0,2);
    this.B.setPosition(0,5);
    this.b = new Piece('Bishop','white');
    this.b.setPosition(7,2);
    this.b.setPosition(7,5);
    this.N = new Piece('Knight','black');
    this.N.setPosition(0,1);
    this.N.setPosition(0,6);
    this.n = new Piece('Knight','white');
    this.n.setPosition(7,1);
    this.n.setPosition(7,6);
    this.R = new Piece('Rook','black');
    this.R.setPosition(0,0);
    this.R.setPosition(0,7);
    this.r = new Piece('Rook','white');
    this.r.setPosition(7,0);
    this.r.setPosition(7,7);
    this.P = new Piece('Pawn','black');
    this.P.setPosition(1,0);
    this.P.setPosition(1,1);
    this.P.setPosition(1,2);
    this.P.setPosition(1,3);
    this.P.setPosition(1,4);
    this.P.setPosition(1,5);
    this.P.setPosition(1,6);
    this.P.setPosition(1,7);
    this.p = new Piece('Pawn','white');
    this.p.setPosition(6,0);
    this.p.setPosition(6,1);
    this.p.setPosition(6,2);
    this.p.setPosition(6,3);
    this.p.setPosition(6,4);
    this.p.setPosition(6,5);
    this.p.setPosition(6,6);
    this.p.setPosition(6,7);
  }
  // @return String either 'white' or 'black' representing current player
 Chess.prototype.getPlayer = function(){
   return 'black';
 }

 Chess.prototype.move = function(piece, destination){
   board[a][b] = board[c][d];
   board[c][d] = ' ';
 }
 // Advance the 'board' to Catalan Opening, Closed variation
 Chess.prototype.opening = function(){

 }
 // @return: String representation of board
 Chess.prototype.display = function(){
   console.log(board);

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
   this.name = name;
   this.color = color;
 }

 // @return: String name of Piece, e.g. 'Queen', 'Pawn'
 Piece.prototype.getName = function(){
   return this.name;
 }
 // @return: String player 'black' or 'white'
 Piece.prototype.getColor = function(){
   return this.color;

 }
 // Set piece to position on board
 Piece.prototype.setPosition = function(position){

   board[x][y] = this.toString();
 }
 // @return: String representation of Piece
 Piece.prototype.toString = function(){
   if(this.name === 'Queen'){
     if(this.color === 'white'){
       return 'q';
     }else{
       return 'Q';
     }
   }
   if(this.name === 'King'){
     if(this.color === 'white'){
       return 'k';
     }else{
       return 'K';
     }
   }
   if(this.name === 'Rook'){
     if(this.color === 'white'){
       return 'r';
     }else{
       return 'R';
     }
   }
   if(this.name === 'Knight'){
     if(this.color === 'white'){
       return 'n';
     }else{
       return 'N';
     }
   }
   if(this.name === 'Bishop'){
     if(this.color === 'white'){
       return 'b';
     }else{
       return 'B';
     }
   }
   if(this.name === 'Pawn'){
     if(this.color === 'white'){
       return 'p';
     }else{
       return 'P';
     }
   }
 }
