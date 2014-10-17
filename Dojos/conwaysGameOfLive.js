//var expect = require('chai').expect;
var assert = require("assert");
var game = {
  board: undefined,
  newBoard: function(){  },
  rules: function(cell, neighbors){
  var liveN = 0
  neighborsAre.forEach(function(value, index){
    if (value === true){
      liveN++;
    }
    if(position === false){
      if(liveN === 3){
        newState = true;
      }else{
        newState = false;
      }
    }
    if(position === true){
      if(liveN < 2){
        newState = false;
      }
      if(liveN > 3){
        newState = false;
      }
      if(liveN === 2 || liveN === 3){
        newState = true;
      }
    }
  });
  },
  neighborsOf: function(x,y){
    var diffs = [-1, 0, 1],
    neighbors = [ ];
    diffs.forEach(function(dX){
      diffs.forEach(function(dY){
        if(this.board.length === 0)return;
        if(dX === 0 && dY === 0) return;
        if(((x + dX) < 0) || ((y + dY) > 2)) return;
        if(((y + dY) < 0) || ((y + dY) > 2)) return;
        neighbors.push(this.board[x + dX] [y + dY]);
      });
    });
    return neighbors;
    },
  tick: function(){
    var after = this.board;
  this.board.forEach(function(row, x){
    row.forEach(function(cell,y){
      after[x][y] = game.rules(cell, game.neighborsOf(x,y));
    });
  });
    return after;
  },
  display: function(){
    var spacer = '+------+-----+----\n';

    return spacer +
    // Apply 'renderRow' to each 'row' in boad
    this.board.map(function render(row){
      return '|' + row.map(function renderCell(cell){
        // return 'X' if cell is TRUTHY otherwise return
        return cell && 'X' || ' ';
      }).join('|') // Place '|' between each 'cell'
      + '|\n';
    }).join(spacer) // Place spacer between each row
    + spacer;
  } // End display
}; // End game;

// describe('Functions are in fact functions', function(){
//   it('should have a function named newBoard', function(){
//     assert(game.newBoard);
//     assert(game.rules);
//     assert(game.neighborsOf);
//     assert(game.tick);
//   });
// });
// describe('rules function works', function(){
//   it('should ', function(){
//     assert.equal(game.rules(true),[true,true,true])
//   });
// });
console.log(game.display(game.tick(game.newBoard)));
