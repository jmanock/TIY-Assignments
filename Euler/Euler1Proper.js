/*
  * If we list all the natural numbers below 10 that are multiples
  * of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples
  * is 23
  *
  * Find the sum of all the multiples of 3 or 5 below 1000.
  */

/* FORMAT
function solution(){
// change input to suit the solution e.g. `linit`
return{
// I wanna see this one..
solveFor: function(limit){perform magic},
// For Problem 2, for example.. However you solve it.
fibonacci: function(limit){....}
filterEvens: function(limit){.....},
sum: function(list){....}
}
}
*/
var assert = require('assert');
// Factory
function solution(){
  // Return object literal
  return{
    // Object with method SolveFor
    solveFor: function(input){
      var sum = 0;
      for(var num = 0; num < input; num++){
        if (num % 5 === 0 || num % 3 === 0){
          sum += num;
        }
      }
      return sum;
    }
  };
}
// console.log(solution().solveFor(10));
// console.log(solution().solveFor(100));
// console.log(solution().solveFor(1000));

describe('Solution().solveFor', function(){
  it('should take "10" and return "23"', function(){
    assert.equal(solution().solveFor(10), 23);
  });
  it('should take "100" and return "2318"', function(){
    assert.equal(solution().solveFor(100), 2318);
  });
  it('should take "1000" and return "233168"', function(){
    assert.equal(solution().solveFor(1000), 233168);
  });
});
