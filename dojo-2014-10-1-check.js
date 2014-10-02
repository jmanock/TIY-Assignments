


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
