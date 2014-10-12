var assert = require('chai').assert;
/* If we list all the natural numbers below 10 that are multiples of
 * 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

// Original Solution
/* function euler1(value){
  var sum = 0;
  for(num = 0; num < value; num++){
    if(num % 5 === 0 || num % 3 === 0){
      sum += num;
    }
  }
  return sum;
}

  console.log(euler1(1000));

 */

// Refactor Solution

  function Solution(){
    return {
      solveFor: function(value){
        var sum = 0;
        for (num = 0; num < value; num++){
          if(num % 5 === 0 || num % 3 === 0){
            sum += num;
          }
        }
        return sum;
      } // End solveFor
    } // End Return
  } // End function Solution

describe('Solution().solveFor', function(){
  it('should take "10" and return "23"', function(){
    assert.equal(Solution().solveFor(10), 23);
  });
  it('should take "50" and return "543"', function(){
    assert.equal(Solution().solveFor(50), 543);
  });
  it('should take "100" and return "2318"', function(){
    assert.equal(Solution().solveFor(100), 2318);
  });
  it('should take "250" and return "14543"', function(){
    assert.equal(Solution().solveFor(250), 14543);
  });
  it('should take "500" and return "57918"', function(){
    assert.equal(Solution().solveFor(500), 57918);
  });
  it('should take "1000" and return "233168"', function(){
    assert.equal(Solution().solveFor(1000), 233168);
  });
});
