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

  console.log(Solution().solveFor(1000));
