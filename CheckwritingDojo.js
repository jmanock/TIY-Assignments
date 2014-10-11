// @jmanock and @nhare Checkwritting dojo
//var assert = require('chai').assert;

var ones = {zero:0, one:1, two:2, three:3, four:4, five:5};

// function toEnglish(value){
//     return ones[value];
// }

// var words = { zero: 0, one: 1, two: 2 };

// function fromEnglish(word){
//     return words[word];
//
//     if ( word === 'zero' ){
//         return words[word];
//         // return words['zero']; // word === 'zero'
//         // return 0; // words.zero === 0
//     }
//     if ( word === 'one' ){
//         return words[word];
//         return words['one']; // word === 'one'
//         // return 1; // words.one === 1
//     }
//     if ( word === 'two' ){
//         return words[word];
//         // return words['two']; // word === 'two'
//         // return 2; // words.two === 2
//     }
// }

var checkWriting = {
  toEnglish: function toEnglish(value){
    return ones[value];
  },
  fromEnglish: function fromEnglish(word){
    return one[word];
  }
};


console.log(checkWriting.toEnglish(1));

// describe('toEnglish()', function(){
//     it('should convert "zero" through "five"', function(){
//         assert.equal(checkWriting.toEnglish(0), 'zero');
//         assert.equal(checkWriting.toEnglish(1), 'one');
//         assert.equal(checkWriting.toEnglish(2), 'two');
//         assert.equal(checkWriting.toEnglish(3), 'three');
//         assert.equal(checkWriting.toEnglish(4), 'four');
//         assert.equal(checkWriting.toEnglish(5), 'five');
//     });
// describe('toEnglish()', function()){
//     it('should not understand 6 yet', function(){
//         assert.isUndefined(toEnglish(6));
//     });
// }

// describe('fromEnglish()', function(){
//     it('should convert 0 through 2', function(){
//         assert.equal(fromEnglish('zero'), 0);
//         assert.equal(fromEnglish('one'), 1);
//         assert.equal(fromEnglish('two'), 2);
//         // assert.equal(fromEnglish('three'), 3);
//         // assert.equal(fromEnglish('four'), 4);
//         // assert.equal(fromEnglish('five'), 5);
//     });
//
//     it('should not understand 6 yet', function(){
//         // assert.isUndefined(fromEnglish('six'));
//     });
// });
