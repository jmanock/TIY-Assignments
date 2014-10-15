var assert = require('chai').assert
/**
 * Factory 'solution'
 * @return Object with method 'solveFor'
 */

 //function solution()
 // Will work with solve for at the bottom

var solution = function(){
   return {
     solveFor: function(){

    }
  }
}
// Works if var solution is empty
solution.foo = function(){
  console.log('solved');
}

var a = solution(), b = solution();
a = {foo: 'bar'};
b = {foo: 'bar'};

it('should totally pass', function(){
  assert.typeOf(solution, 'function');
  assert.isUndefined(solution.foo);
  assert.isDefined(solution.solveFor);
  assert.isDefined(solution().solveFor, 'solution.solveFor does not exist');

  assert.isDefined(a.solveFor)
  assert.isFunction(a.solveFor);


  assert.typeOf(a, 'object');
  assert.typeOf(b,'object');
})


function Game(){
  return {
    display: function(){
      console.log('I am helping');
    }
  }
}
