var assert = require('assert');

function test(actual, expected, success){
    success = success || 'pass!';

    assert(actual === expected) || console.log(success);
}

/**
 * Check Writing
 *
 * Given an Number representing money -- $1234.56 -- convert
 * that into it's string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * In a lot of ways, this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned there will be put into
 * practice here, but backwards. Hooray!
 */

/**
 * Sample Data:
 *
 * $ 1234.56 => "one thousand, two hundred thirty four and 56/100s"
 * $ 123.45  => "one hundred twenty three and 45/100s"
 * $ 12.34   => "twleve and 34/100s"
 * $ 1.23    => "one and 23/100s"
 *
 * EXTRA CREDIT!
 *
 * $ 12,345,678.90 =>
 * "twelve million, three hundred fourty five thousand, six hundred
 *   seventy eight and 90/100s"
 *
 * Make up your own, too.
 */



  var ones=["zero", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven",
      "twelve", "thirteen", "fourteen", "fivteen", " sixteen",
      "seventeen", "eightteen", "nineteen", "twenty"];

  var tens = ["zero", "ten","twenty ","thirty ","forty ", "fifty ",
        "sixty ", " seventy ", "eighty ","ninty "];



function toEnglish(value){

  //var value = value.toFixed(2);
  //var cents = value.slice(-2);
  //var cents = (cents + ' /100s dollars');
  var value = value.toFixed(2);
      cents = value.slice(-2);
  var dollars = value.slice(0, -3);

  if (dollars.length === 1){
    return ones[dollars] +' and '+ cents +' /100s dollars';
  }
  if(dollars.length === 2){
    if (dollars % 10 === 0){
      return tens[dollars[0]] + ' and ' + cents + ' /100s dollars';
    }
    return tens[dollars[0]] + ones[dollars[1]] + ' and ' + cents + ' /100s dollars';
  }
  if(dollars.length === 3){
    return ones[dollars[0]] + ' hundred ' + tens[dollars[1]] + ones[dollars[2]] +
      ' and ' + cents + ' /100s dollars';
  }
}

console.log('working?xx');
// console.log(toEnglish(1));
// console.log(toEnglish(1.49));
// console.log(toEnglish(2));
// console.log(toEnglish(2.54));
// console.log(toEnglish(30));
// console.log(toEnglish(35.59));
// console.log(toEnglish(54.23));
// console.log(toEnglish(60));
console.log(toEnglish(232.43));
console.log(toEnglish(543.32));
