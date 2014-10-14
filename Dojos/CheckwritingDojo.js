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

    if (dollars < 20){
      return ones[dollars] + end;
      }
    if (dollars < 100){
      if (dollars % 10 === 0){
        return tens[dollars[0]] + end;
      } else {
        return tens[dollars[0]]  + ones[dollars[1]] + end;
      }
    }
    if(dollars < 1000){
      if(dollars % 100 === 0){
        return ones[dollars[0]] + ' hundred ' + end;
      }else if (dollars % 10 === 0){
        return ones[dollars[0]] + ' hundred ' + tens[dollars[1]] + end;
      }else if (dollars[2] < 2){
        return ones[dollars[0]] + ' hundred ' + tens[dollars[2]] + ' ' + ones[dollars[2]] +
          end;
      }else{
        return ones[dollars[0]] + ' hundred ' + tens[dollars[1]] + ' ' + ones[dollars[2]] +
         end;
      }
    }
    if(dollars < 10000){
      if(dollars % 1000 === 0){
        return ones[dollars[0]] + ' thousand ' + end;
      }else if(dollars % 100 === 0){
        return ones[dollars[0]] + ' thousand ' + ones[dollars[1]] + ' hundred ' +
          tens[dollars[2]] + end;
      }else if(dollars % 10 === 0){
        return ones[dollars[0]] + ' thousand ' + ones[dollars[1]] + ' hundred ' +
          tens[dollars[2]] + end;
      }else if(dollars[2] < 2){
        return ones[dollars[0]] + ' thousand ' + ones[dollars[1]] + ' hundred ' +
          tens[dollars[3]] + end;
      }else{
        return ones[dollars[0]] + ' thousand ' + ones[dollars[1]] + ' hundred ' +
          tens[dollars[2]] + ' ' + ones[dollars[3]] + end;
      }
    }
  } // End toEnglish
}; // End CheckWriting

// Test Code
describe('CheckWriting.toEnglish()', function(){
  it('should convert "0" to "zero"', function(){
    assert.equal(CheckWriting.toEnglish(0), 'zero and 00/100s');
  });
  it('should convert "20" to "twenty"', function(){
    assert.equal(CheckWriting.toEnglish(20), 'twenty and 00/100s');
  });
  it('should convert "9999" to "nine thousand nine hundred ninty nine"', function(){
    assert.equal(CheckWriting.toEnglish(9999), 'nine thousand nine hundred ninty nine and 00/100s');
  });
  it('should convert "1234.56" to "one thousand two hundred thirty four and 56/100s"', function(){
    assert.equal(CheckWriting.toEnglish(1234.56), 'one thousand two hundred thirty four and 56/100s');
  });
  it('should convert "123.45" to "one hundred twenty three and 45/100s"', function(){
    assert.equal(CheckWriting.toEnglish(123.45), 'one hundred twenty three and 45/100s');
  });
  it('should convert "12.34" to "twelve and 34/100s"', function(){
    assert.equal(CheckWriting.toEnglish(12.34), 'twelve and 34/100s');
  });
});
