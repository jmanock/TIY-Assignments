var assert = require('chai').assert;

var word = {zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7,
    eight:8, nine:9, ten:10, eleven:11, twelve:12, thirteen:13, fourteen:14,
    fivteen:15, sixteen:16, seventeen:17, eighteen:18, nineteen:19, twenty:20
};

var stringCal = {
  fromEnglish: function(x, y){
    return word[x] + word[y];
  }
};

describe('stringCal.fromEnglish()', function(){
  it('should add "zero" to "zero" and return "0"', function(){
    assert.equal(stringCal.fromEnglish('zero','zero'), 0);
  });
  it('should add "zero" to "one" and return "1"', function(){
    assert.equal(stringCal.fromEnglish('zero','one'), 1);
  });
  it('should add "one" to "two" and return "3"', function(){
    assert.equal(stringCal.fromEnglish('one','two'), 3);
  });
  it('should add "two" to "three" and return "5"', function(){
    assert.equal(stringCal.fromEnglish('two','three'), 5);
  });
  it('should add "three" to "four" and return "7"', function(){
    assert.equal(stringCal.fromEnglish('three','four'), 7);
  });
  it('should add "five" to "six" and return "11"', function(){
    assert.equal(stringCal.fromEnglish('five','six'), 11);
  });
  it('should add "six" to "seven" and return "13"', function(){
    assert.equal(stringCal.fromEnglish('six','seven'), 13);
  });
  it('should add "seven" to "eight" and return "15"', function(){
    assert.equal(stringCal.fromEnglish('seven','eight'), 15);
  });
  it('should add "ten" to "ten" and return "20"', function(){
    assert.equal(stringCal.fromEnglish('ten','ten'), 20);
  });
  it('should add "nineteen" to "one" and return "20"', function(){
    assert.equal(stringCal.fromEnglish('nineteen','one'), 20);
  });
});
