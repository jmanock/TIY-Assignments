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


function numbersToWords(num){
var val = num.toString();

  ones=["zero", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen", "fivteen", " sixteen",
        "seventeen", "eightteen", "nineteen", "twenty"];

  tens = ["zero", "ten","twenty ","thirty ","forty ", "fifty ",
          "sixty ", " seventy ", "eighty ","ninty "];
  //hundreds = ["zero","one hundred", "two"];
  numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if(num < 20){
      return ones[num];
    }
    if (num < 100){
      if (num % 10 === 0){
        return tens[val[0]];
      }{
        return tens[val[0]] + ones[val[1]];
      }
    }
    if (num < 1000){
      if (num % 10 === 0){
        return tens[val[0]];
      }{
        return ones[val[0]] + ' hundred and ' + tens[val[1]] + ones[val[2]];
      }
    }
    // if (num < 1000){
    //   if (num % 10 === 0){
    //     return tens[var[0]];
    //   }{
    //     return ones[var[0]] + "hundred" + ones[var[1]];
    //   }
    // }
}
console.log(numbersToWords(0));
console.log(numbersToWords(2));
console.log(numbersToWords(4));
console.log(numbersToWords(10));
console.log(numbersToWords(22));
console.log(numbersToWords(30));
console.log(numbersToWords(99));
console.log(numbersToWords(101));
console.log(numbersToWords(123));
console.log('it should take 1 and return "one"',
numbersToWords(1)==="one");

console.log('it should take 3 and return "three"',
numbersToWords(3) === "three");
