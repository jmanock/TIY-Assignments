module.exports = Game;

function Board(){

}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean
 */
 Board.prototype.isAlive = function(x,y){
   return this.board[x + ',' + y];
 };

 /**
  * @param Number x coordinate
  * @param Number y coordinate
  * @return undefined
  */
Board.prototype.live = function(x,y,value){
  this.board[x + ',' + y] = true;
};

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Board.prototype.kill = function(x,y){
  delete this.board[x +',' + y];
};

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
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
Game.prototype.isAlive = function(x,y){
  return this.board[x][y];
};

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x,y){
  this.board[x][y] = true;
};

/**
 * Make the cell at {x,y} 'dead', whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x,y){
  this.board[x][y]=false;
};

/**
 * Update the 'board' by applying the 'rules' to each cell
 */
Game.prototype.tick = function(x,y){
  var newBoard = board();
  var self = this;
  this.board.forEach(function(row,x){
    row.forEach(function(cell,y){
      var newCell = self.rules(x,y, this.board);
      newBoard[x][y] = newCell;
    });
  });
  this.board = newBoard;
};

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return number of surrounding living cells
 */
Game.prototype.neighborsOf = function(x,y){
  var neighbors;
  var liveCell =0;
  if(x===0 && y===0){
    neighbors = [this.board[0][1], this.board[1][0], this.board[1][1]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){
        liveCell++;
      }
    }
  }else if (x === 0 && y === 1){
    neighbors = [this.board[0][0], this.board[1][0], this.board[1][1], this.board[1][2], this.board[0][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){
        liveCell++;
      }
    }
  }else if(x === 0 && y === 2){
    neighbors = [this.board[0][1], this.board[1][1], this.board[1][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){
        liveCell++;
      }
    }
  }else if(x === 1 && y === 0){
    neighbors = [this.board[0][0], this.board[0][1], this.board[1][1], this.board[2][1], this.board[2][0]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){
        liveCell++;
      }
    }
  }else if(x === 1 && y === 1){
    neighbors = [this.board[0][0], this.board[1][0], this.board[2][0], this.board[2][1], this.board[0][2], this.board[1][2], this.board[2][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] === true){
        liveCell++;
      }
    }
  }else if(x === 1 && y === 2){
    neighbors = [this.board[0][1], this.board[0][2], this.board[1][1], this.board[2][1], this.board[2][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i]===true){
        liveCell++;
      }
    }
  }else if(x === 2 && y === 1){
    neighbors = [this.board[2][0], this.board[1][0], this.board[1][1], this.board[1][2], this.board[2][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i]=== true){
        liveCell++;
      }
    }
  }else if(x === 2 && y === 0){
    neighbors = [this.board[1][0], this.board[1][1], this.board[2][1]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i]===true){
        liveCell++;
      }
    }
  }else if(x === 2 && y === 2){
    neighbors = [this.board[2][1], this.board[1][1], this.board[1][2]];
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i]===true){
        liveCell++;
      }
    }
  }
  return liveCell;
}; // end neighborsOf

/**
 * @param Number x coordinate
 * @param Number y coordiante
 * @return Boolean state cell after rules applied
 */
Game.prototype.rules = function(x,y){
  var cell = this.board[x][y],
  liveCell = this.neighborsOf(x,y);
  if(cell){
    if(liveCell < 2){
      newCell = false;
    }if(liveCell === 2 || liveCell === 3){
      newCell = true;
    }if(liveCell > 3){
      newCell = false;
    }
  }else{
    if(liveCell === 3){
      newCell = true;
    }else{
      newCell = false;
    }
  }
  return newCell;
};

/**
 * WARNING: This is VOODOO MAGIC...
 *
 * GIVEN:
 *   this.board === [
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *   ];
 *
 * EXPECT:
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
  // Apply `renderRow` to each `row` in `board`
  return spacer + this.board.map(function renderRow(row){
    // Apply `renderCell` to each `cell` in `row`
    return '| ' + row.map(function renderCell(cell){
      // return 'X' if `cell` is TRUTHY otherwise return ' '
      return cell && 'X' || ' ';
      // Place ' | ' between each `cell`
    }).join(' | ') + ' |\n';
    // Place `spacer` between each `row`
  }).join(spacer) + spacer;
}; // END display
