module.exports = Game;

function board(){
  return [
  [false, false, false],
  [false, false, false],
  [false, false, false],
  ];
}

function Game(){
  this.board = board();
}

/**
 *@param Number x coordinate
 *@param Number y coordinate
 *@return Boolean if cell at {x,y} is alive
 */
 Game.prototype.isAlive = function(x, y){
   if(this.board[x][y] === true){
     return true;
   }
 }
/**
 *Make the cell at {x,y} "alive", whatever that means
 *
 *@param Number x coordinate
 *@param Number y coordinate
 *@return undefined
 */
 Game.prototype.setAlive = function(x,y){
    this.board[x][y] = true;
 }
/**
 *Make the cell at {x,y} "dead", whatever that means
 *
 *@param Number x coordinate
 *@param Number y coordinate
 *@return undefined
 */
 Game.prototype.setDead = function(x,y){
   this.board[x][y] = false;
 }
 /**
  * Update the `board` by applying the `rules` to each cell
  */
Game.prototype.tick = function(){

//Start with a fresh board..
//Apply `rules` to each cell in the current board...
// Record the result of `rules` in the new board...
// Update the current board to match the new board...
var boardNewTick = [ ];
  this.board.forEach(function(value, index){
    value.forEach(function(x,y){
      boardNewTick.push(this.rules(this.board[index][y], neighborsOf(this.board,index,y)))
    });
  });
  var row1 = boardNewTick.splice(0,3);
  var row2 = boardNewTick.splice(0,3);
  this.board = [row1, row2, boardNewTest];
  return this.board;
}

Game.prototype.neighborsOf = function(x,y){ neighbors = [];
  if(x === 0 && y === 0){
    neighbors = [this.board[1][1], this.board[0][1], this.board[1][0]];
  }
  if(x === 1 && y === 0){
    neighbors = [this.board[1][1], this.board[0][0], this.board[0][1], this.board[2][0],
    this.board[2][1]];
  }
  if(x === 2 && y === 0){
    neighbors = [this.board[1][1], this.board[1][0], this.board[2][1]];
  }
  if(x === 1 && y === 1){
    neighbors = [this.board[0][0], this.board[1][0], this.board[2][0], this.board[0][1],
    this.board[0][2], this.board[2][1], this.board[2][2], this.board[1][2]];
  }
  if(x === 1 && y === 2){
    neighbors = [this.board[1][1], this.board[0][1], this.board[0][2], this.board[2][1],
    this.board[2][2]];
  }
  if(x === 2 && y === 1){
    neighbors = [this.board[1][1], this.board[2][0], this.board[1][0], this.board[1][2],
    this.board[0][2]];
  }
  if(x === 2 && y === 2){
    neighbors = [this.board[1][1], this.board[2][1], this.board[1][2]];
  }
  if(x === 0 && y === 1){
    neighbors = [this.board[1][1], this.board[0][0], this.board[1][0], this.board[0][2],
    this.board[1][2]];
  }
  if(x === 0 && y === 2){
    neighbors = [this.board[1][1], this.board[0][1], this.board[1][2]];
  }
  return neighbors;
}
/**
 * What goes here?
 */
Game.prototype.rules = function(cell, neighbors){
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
}
/**
 * WARNING: This is Vodoo Magic
 *
 * Given:
 *  this.board === [
 *  [false, false, false],
 *  [false, false, false],
 *  [false, false, false],
 *    ];
 *
 * Expect:
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 */
 Game.prototype.display = function(){
    var spacer = '+---+---+---+\n';

    return spacer +
        // Apply `renderRow` to each `row` in `board`...
        this.board.map(function renderRow(row){
            return '| ' +
                // Apply `renderCell` to each `cell` in `row`...
                row.map(function renderCell(cell){
                    // return 'X' if `cell` is TRUTHY otherwise return ' '
                    return cell && 'X' || ' ';
                }).join(' | ') // Place ' | ' between each `cell`...
            + ' |\n';
        }).join(spacer) // Place `spacer` between each `row`...
    + spacer;
} // END display
