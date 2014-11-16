var expect = require('chai').expect;
var should = require('chai').should;
var assert = require('chai').assert;

function test1(actual, expected, success){
  success = success || 'You got it!!';

  assert(actual === expected) || console.log(success);
}

var words = {zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10};

var stringCalc = {
  fromEnglish: function(word1, word2){
    return words[word1] + words[word2];
  }
};

describe('stringCalc.fromEnglish(), should return the sume of 2 word inputs converted to numbers', function(){
  it('should return 0 for zero and zero', function(){
    assert.equal(stringCalc.fromEnglish('zero', 'zero'),0);
  });

  it('should return 2 for one and one', function(){
    assert.equal(stringCalc.fromEnglish('one', 'one'),2);
  });

  it('should return 3 for one and two', function(){
    assert.equal(stringCalc.fromEnglish('one', 'two'),3);
  });

  it('should return 19 for ten and nine', function(){
    assert.equal(stringCalc.fromEnglish('ten','nine'),19);
  });

  it('should return 15 for ten and five', function(){
    assert.equal(stringCalc.fromEnglish('ten','five'),15);
  });
});
