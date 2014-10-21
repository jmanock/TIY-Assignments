// var Chess = require('./chess.js');
// var Position = require('./chess.js');
// var Piece = require('./chess.js');
//
// var assert = require('chai').assert;
// var expect = require('chai').expect;
// var chess = new Chess;
//
// it('should return "Piece Name"', function(){
//   assert.equal(chess.Q.getName(), "Queen");
//   assert.equal(chess.q.getName(), "Queen");
//   assert.equal(chess.p.getName(), 'Pawn');
//   assert.equal(chess.P.getName(), 'Pawn');
//   assert.equal(chess.n.getName(), 'Knight');
//   assert.equal(chess.N.getName(), 'Knight');
// });
//
// it('should return "Color"', function(){
//   assert.equal(chess.Q.getColor(), 'black');
//   assert.equal(chess.q.getColor(), 'white');
// });
//
// // it('should return "R" for "Black Rook"', function(){
// //   assert.equal(chess.R1.toString(), 'R');
// // });
//
// // it('should return "n" for "White Knight"', function(){
// //   assert.equal(chess.n1.toString(), 'n');
// // });
//
// it('chess.k.getName should equal "King"', function(){
//   expect(chess.k.getName()).to.equal('King');
// });
//
// it('should give me an "x = 0" and "y = 4" for Black Queen', function(){
//   assert.deepEqual(chess.Q.position,[0,4]);
// });

var Chess = require('./chess.js').Chess;
var assert = require('chai').assert;
var Position = require('./chess.js').Position;
var Piece = require('./chess.js').Piece;

console.log('This is the result of require("./chess")', Chess);

describe('Piece', function(){
  it('should have a function',function(){
    assert.isFunction(Piece);
  })
});

describe('Position', function(){
  it('should have a function Position()', function(){
    assert.isFunction(Position);
  });
  it('should have an x and y coordinates,', function(){
    assert.equal
  });
});

describe('Chess,', function(){
  it('should have a function Chess()', function(){
    assert.isFunction(Chess);
  });
});
