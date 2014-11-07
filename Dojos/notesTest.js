var assert = require('chai').assert;
/**
 * Factory 'solution'
 * @return Object with method 'solveFor'
 */

 //function solution()
 // Will work with solve for at the bottom

// var solution = function(){
//    return {
//      solveFor: function(){
//
//     }
//   }
// }
// // Works if var solution is empty
// solution.foo = function(){
//   console.log('solved');
// }
//
// var a = solution(), b = solution();
// a = {foo: 'bar'};
// b = {foo: 'bar'};
//
// it('should totally pass', function(){
//   assert.typeOf(solution, 'function');
//   assert.isUndefined(solution.foo);
//   assert.isDefined(solution.solveFor);
//   assert.isDefined(solution().solveFor, 'solution.solveFor does not exist');
//
//   assert.isDefined(a.solveFor)
//   assert.isFunction(a.solveFor);
//
//
//   assert.typeOf(a, 'object');
//   assert.typeOf(b,'object');
// })


// function Game(){
//   return {
//     display: function(){
//       console.log('I am helping');
//     }
//   }
// }



// Notes 10-16
var ralph = {
  name: 'Ralph',
  gender: 'm'
}
var fabi = {
  name: 'fabi',
  gender: 'f'
}
var dave = {
  name: 'dave',
  gender: 'm'
}
var pluck = function(collection, property){
  var array = [ ];
  collection.forEach(function(element, index, array){
  plucked.push(element[property]);
  });
    return plucked;
}
//I want a function that plucks a property out of each of a collection of objects

//ex ralph, fabi, dave as inputs gender is the other inputs
// expected output
//['m', 'f', 'm']

describe('the pluck function',function(){
  it('should give back an array of strings when the property being plucked is a string', function(){
    var collection = [ralph, fabi, dave]
    expect(pluck(collection,'gender')).to.deep.eq(['m','f','m']);
  });
});


//I want a function that removes elements from an array. Ill choose which elements get removed with a callback function.

// ex
// input[1,2,3,4]
//  callback function(n){
//  if (n % 2 === 0)
//    return true
// }

// output [2,4]
// 1st pass through remove:
// removed = []
// collection.forEach
// *1
// doesn't make it
// callback(1) isn't true
// *2
// *3
// *4

var remove = function(collection, callback){
  var removed = [ ];
  collection.forEach(function(element, index, array){
    if(callback(element) === true){
    removed.push(element);
  }
});
  return removed
  //return [1,2,3,4];
}
describe('the remove function', function(){
  it('returns an array of numbers for which a callback function is true', function(){
    var collection = [1,2,3,4 ];
    var callback = function(n){ return true}
    expect(remove(collection, callback)).to.deep.eq([1,2,3,4]);
  });
  it('returns the even numbers of an array when the callback is true only for evens', function(){
    var collection = [1,2,3,4];
    var callback = function(n){
      return n % 2 === 0;
    }
    expect(remove(collection, callback)).to.deep.eq([2,4]);
  });
});
