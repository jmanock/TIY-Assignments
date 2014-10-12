// Check Writing Dojo with objects
var assert = require('chai').assert;

var ones = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen', 'twenty'];

var tens = ['zero', 'ten', 'twenty', 'thirty', 'fourty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninty'];

var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
      'sixteen', 'seventeen', 'eighteen', 'nineteen'];



var CheckWriting = {
  toEnglish: function(value){
    var value = value.toFixed(2),
        cents = value.slice(-2),
        dollars = value.slice(0, -3),
        end = ' and ' + cents + '/100s';

    if (dollars.length === 1){
      return ones[dollars] + end;
      }
    if (dollars.length === 2){
      if (dollars % 10 === 0){
        return tens[dollars[0]] + end;
      } else {
        return tens[dollars[0]]  + ones[dollars[1]] + end;
      }
    }
    if(dollars.length === 3){
      if(dollars % 100 === 0){
        return ones[dollars[0]] + ' hundreds' + end;
      }else if (dollars % 10 === 0){
        return ones[dollars[0]] + ' hundreds' + tens[dollars[1]] + end;
      }else if (dollars[2] < 2){
        return ones[dollars[0]] + ' hundreds' + tens[dollars[2]] + ones[dollars[2]] +
          end;
      }else{
        return ones[dollar[0]] + ' hundreds' + tens[dollars[1]] + ones[dollars[2]] +
         end;
      }
    }
    if(dollars.length === 4){
      if(dollars % 1000 === 0){
        return ones[dollars[0]] + ' thousand' + end;
      }else if(dollars % 100 === 0){
        return ones[dollars[0]] + ' thousand' + ones[dollars[1]] + ' hundreds' +
          tens[dollars[2]] + end;
      }else if(dollars % 10 === 0){
        return ones[dollars[0]] + ' thousand' + ones[dollars[1]] + ' hundreds' +
          tens[dollars[2]] + end;
      }else if(dollars[2] < 2){
        return ones[dollars[0]] + ' thousand' + ones[dollars[1]] + ' hundreds' +
          tens[dollars[3]] + end;
      }else{
        return ones[dollars[0]] + ' thousand' + ones[dollars[1]] + ' hundreds' +
          tens[dollar[2]] + ones[dollar[3]] + end;
      }
    }
  } // End toEnglish
}; // End CheckWriting

// Test Code
describe('CheckWriting.toEnglish()', function(){
  it('should convert "0" to "zero"', function(){
    assert.equal(CheckWriting.toEnglish(0), 'zero and 00/100s');
  });
  it('should conver "20" to "twenty"', function(){
    assert.equal(CheckWriting.toEnglish(20), 'twenty and 00/100s');
  });
});
