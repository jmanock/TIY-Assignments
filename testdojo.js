//
//
//
// // var soultion ={
// //   eulerNumber2:function euler2(prev, curr){
// //
// //   var sum = 0;
// //   for (curr = curr; curr < 4000000; curr = prev + curr){
// //      prev = curr - prev;
// //     if(curr % 2 === 0){
// //       sum += curr;
// //     }
// //   }
// //   return sum;
// // }
// // }
//
//
//
// //List
// //  Make the list of Fibonacci numbers
// function Solution(){
//   return {
//     fibonacci: function(limit, prev, curr){
//       var fibo = [prev + curr];
//       for(curr = curr; curr < limit; curr = prev + curr){
//         prev = curr - prev;
//         fibo.push(curr);
//       }
//       return this;
//     },
//     filterEvens: function(){
//       var fibbo = [ ];
//       fibbo.forEach(function(value, index){
//         if(list % 2 === 0){
//           fibbo.push(list)
//         }
//       });
//       return fibbo;
//     },
//     sum: function(list){
//       sum = a + b;
//     }
//   //  return sum;
//   } // End Return
// } // End Solution
//
// //console.log(Solution().fibonacci());
//
// // Filter
//   // Filter out the even numbers
//   // if(number %2 === 0)
//   //   return number;
// // Sum
//   // Add the numbers together
//   // sum = sum + current;
//   //   return sum;
// //
// // var anObject = {
// //     aProperty: 'a value',
// //     aMethod: function aMethod(){
// //       return 'hi',
// //       anotherOne: function another(){
// //         return 'yo'
// //     }
// //     }
// // }
// //
// // console.log(anObject.aMethod().anotherOne());
//
//
//
// // Test method chaining
// function chess(){
//   board = [
//       ['R','N','B','Q','K','B','N','R'],
//       ['P','P','P','P','P','P','P','P'],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       ['p','p','p','p','p','p','p','p'],
//       ['r','n','b','q','k','b','n','r'] ];
//
//   this.move = function(a,b,c,d){
//       board[a][b] = board[c][d];
//       board[c][d] = ' ';
//       // console.log(this.board);  Different display method
//       return board;
//   }
// }
//
// var game = new chess;  // starts a new game with name of your choice
// var w1 = game.move(4,2,6,2);  //white move 1
// var b1 = game.move(3,3,1,3);  //black move 1
// //console.log(w1.join('\n'));
// //console.log(b1.join('\n'));
//
// var w2 = game.move(4,3,6,3);  //white move 2
// var b2 = game.move(2,4,1,4);  //black move 2
// var w3 = game.move(5,5,7,6);  //white move 3
// var b3 = game.move(1,4,0,5);  //black move 3
// var w4 = game.move(5,6,6,6);  //white move 4
// var b4 = game.move(2,5,0,6);  //black move 4
// var w5 = game.move(6,6,7,5);  //white move 5
//
// console.log(w5.join('\n'));



/**
 * @return Obkect containing solver a method that solves project euler #2
 */
function solution(){
  return {
    /**
     * @param: Number limit eg 4million
     * @return: Number sum of even fibonacci terms less than limit
     */
    solveFor: function(limit){
      return this.sum(this.filterEvens(this.fibonacci(limit)));

      // Refactored
      // var sequence = this.fibonacci(limit);
      // var evens = this.filterEvens(sequence);
      // var sum = this.sum(evens);
      // return sum;
    },
    /**
     * @param: Number limit
     * @return: Array of Number in fibonacci sequence up to limit
     */


    fibonacci: function(limit){
      var sequence = [1,2];
      var prev = 1, curr = 2, temp;
      if(limit < 3){
        return [ ];
      }
      // prev = 1, curr = 2, temp = undefined
      // while 1 + 2 < 5
      // temp = 1 + 2 = 3
      // prev = curr = 2
      // curr = temp = 3
      while(prev + curr < limit){
        temp = prev + curr;
        prev = curr;
        curr = temp;
        sequence.push(temp);
      }
      return sequence;
    },
    /**
     * @param: Array list of Number
     * @return: Array of even - valued number
     */
    filterEvens: function(list){
      //list = [1], item = 1,
      // item(1) % 2 === 1,
      // list = [2], item = 2
      // item(2) %2 === 0
      return list.filter(function(item){
        return (item % 2 === 0);
        // same thing
      //   return list.forEach(function(item){
      //     if(item%2 === 0){
      //       evens.push(item)
      //     }
      //   })
      });
    },
    /**
     * @param array list of Number
     * @ return Number sum of all items in list
     */
    sum: function(list){
      var total = 0;
      // list.forEach(function(item){
      // list = [1,2,3]
      // prev = init = 0 (from reduce(list,init))
      // item = 1
      // return 0 + 1;
      // Next pass
      // prev = 1 (returned)
      // item = 2
      // return 1 + 2 = 3
      return list.reduce(prev, item){}
        total += item
      });
      return total;
    }
  }
}
// Testing Code
var assert = require('chai').assert
describe('Project Euler #1', function(){
  var S; //or var S = solution()
  beforeEach(function){
    S = solution();
  }

descrie('fibonacci sequence', function(){
  it('should ave a function for doing this', function(){
    assert.isFunction(S.fibonacci);
    assert.deepEqual(S.fibonacci(0), [ ]);
  });
  it('should calculate fibonacci numbers for a small sample', function(){
    assert.deepEqual(S.fibonacci(5),[1,2,3]);
    assert.deepEqual(S.fibonacci(10),[1,2,3,5,8,]);
    assert.deepEqual(S.fibonacci(20),[1,2,3,5,8,13]);
    assert.deepEqual(S.fibonacci(40), [1,2,3,5,8,13,21,34]);
  });
});
});
describe('filterEvens', function(){
  it('should have a function for doing this', function(){
    assert.isFunction(S.filterEvens);
    assert.deepEqual(S.fileterEvens([ ]), [ ]);
  });
  it('should filter out evens', function(){
    assert.deepEqual(S.filterEvens([1]), [ ]);
    assert.deepEqual(S.filterEvens([2]), [2]);
    assert.deepEqual(S.filterEvens([1,2]), [2]);
    assert.deepEqual(S.filterEvens([1,2,3]), [2]);
  });
});
describe('sum values in a list', function(){
  it('should have a function for doing this', function(){
    assert.isFunction(S.sum);
    assert.equal(S.sum([]),0);
  });
  it('should sum items', function(){
    assert.equal(S.sum([1]),1);
    assert.equal(S.sum([2]),2);

    assert.equal(S.sum([1,1]), 2);
    assert.equal(S.sum([1,2]), 3);
  });
});
describe('solveFor', function(){
  it('should have a function for doing this', function(){
    assert.isFunction(S.solveFor);
  });
  it('should be able to solve simple examples', function(){
    assert.equal(S.solveFor(0), 0);
    assert.equal(S.solveFor(3), 2);
    assert.equal(S.solveFor(5), 2);
    assert.equal(S.solveFor(15), 10);
  });
  it('should calculate the final answer', function(){
    console.time('4m');
    console.timeEnd(S.solveFor(4.0e6));
    console.timeEnd('4m');
  });
});
