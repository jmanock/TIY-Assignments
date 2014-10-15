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
  neighborsOf: function(x,y){ neighbors = [];
    if(x === 0 && y === 0){
      neighbors = [board[1][1], board[0][1], board[1][0]];
    }
    if(x === 1 && y === 0){
      neighbors = [board[1][1], board[0][0], board[0][1], board[2][0],
      board[2][1]];
    }
    if(x === 2 && y === 0){
      neighbors = [board[1][1], board[1][0], board[2][1]];
    }
    if(x === 1 && y === 1){
      neighbors = [board[0][0], board[1][0], board[2][0], board[0][1],
      board[0][2], board[2][1], board[2][2], board[][]];
    }
    if(x === 1 && y === 2){
      neighbors = [board[1][1], board[0][1], board[0][2], board[2][1],
      board[2][2]];
    }
    if(x === 2 && y === 1){
      neighbors = [board[1][1], board[2][0], board[1][0], board[1][2],
      board[0][2]];
    }
    if(x === 2 && y === 2){
      neighbors = [board[1][1], board[2][1], board[1][2]];
    }
    if(x === 0 && y === 1){
      neighbors = [board[1][1], board[0][0], board[1][0], board[0][2],
      board[1][2]];
    }
    if(x === 0 && y === 2){
      neighbors = [board[1][1], board[0][1], board[1][2]];
    }
    return neighbors;
    },
  tick: function(){ var boardNewTick = [];
  board.forEach(function(value, index){
    value.forEach(function(x,y){
      boardNewTick.push(conway(board[index][y], neighborsOf(board,index, y)));
    });
  });
  var row1 = boardNewTick.splice(0,3);
  var row2 = boardNewTick.splice(0,3);
  board = [row1, row2, boardNewTest];
  return board},
  display: function(){
    var spacer: '+------+-----+----\n';

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
