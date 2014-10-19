function Board(){

}

// @param Number x coordinate
// @param Number y coordinate
// @return Boolean
Board.prototype.isAlive = function(x,y){
  // return true if this.board[x][y] is 'alive'
  return Boolean(this[x + ',' + y]);
};
// @param Number x coordinate
// @param Number y coordinate
// @return undefined
Board.prototype.live = function(x,y,value){
  // make the cell at [x][y] 'alive',whatever that means
  this[x + ',' + y] = true;
};

Board.prototype.kill = function(x,y){
  // make the cell at [x,y] 'dead', whatever that means
  delete this[x + ',' + y];
};

Game.prototype.isAlive = function(x,y){
  return this.board[x][y];
}
Game.prototype.setAlive = function(x,y){
  this.board[x][y] = true;
}
Game.prototype.tick = function(){
  // Create a new board
  var newBoard = board();
  var self = this;
  // This can _replace_
  this.board = newBoard.map(function(row, x){
    return row.map(function(cell, y){
      return self.rules(cell, self.neighborsOf(x,y));
    });
  });

  newBoard.forEach(function(row,x){
    newBoard.forEach(function(cell,y){
      newBoard[x][y] = self.rules(self.board[x][y], self.neighborsOf(x,y))
    })
  })

  // Apply 'rules' to each cell in the current board
  this.board.forEach(function(row,x){
    row.forEach(function(cell,y){
      //console.log(self);
    var newCell = self.rules(cell,self.neighborsOf(x,y));
  // Record the results in the NEW board
    newBoard[x][y] = newCell;
    });
  });
// Make the current board match the new board
  this.board = newBoard;
}
// @param: Boolean cell
// @param: Number neighbors representing LIVE neighbors 'cell'
// @return: Boolean
Game.prototype.rules = function(cell, neighbors){
  // Survival Rule
  if(cell && (1 <= neightbors <= 4)){
    return true;
  }
  // Reproduction Rule
  if(!cell && neighbors === 3){
    return true;
  }
  // Everything else is death
  return false;
  // if(cell){
  //   if(neighbors >= 2){
  //     if(neighbors > 3){
  //       return false; // overpopulation
  //     }
  //     return true; // survial
  //   }
  //   return false; // underpopulation
  // }
  // if(neighbor === 3){
  //   return true;
  // }
  // return false;

}
// @param: Number x coordinate of 'cell'
// @param: Number y coordianate of 'cell'
// @return: Number of live neighbors
Game.prototype.neighborsOf = function(x,y){
  var neighbors = 0, diffs = [-1, 0, +1];
  var self = this;

  diffs.forEach(function(dX){
    diffs.forEach(function(dY){
      if(dX == 0 && dY == 0) return;

      if(self.board[x + dX] && self.board[x + dX][y + dY]){
        neighbors++;
      }
    });
  });
  return neighbors;
}
