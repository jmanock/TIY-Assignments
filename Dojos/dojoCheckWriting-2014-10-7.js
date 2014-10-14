
  var ones=["zero", "one", "two", "three", "four", "five",
      "six", "seven", "eight", "nine", "ten", "eleven",
      "twelve", "thirteen", "fourteen", "fivteen", " sixteen",
      "seventeen", "eightteen", "nineteen", "twenty"];

  var tens = ["zero", "ten","twenty ","thirty ","forty ", "fifty ",
        "sixty ", " seventy ", "eighty ","ninty "];

  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function toEnglish(value){

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
  if(dollars.length === 4){
    return ones[dollars[0]] + ' thousand ' + ones[dollars[1]] + ' hundred ' + tens[dollars[2]] +
      ones[dollars[3]] + ' and ' + cents + ' /100s dollars';
  }
  if(dollars.length === 5){
    return tens[dollars[0]] + ones[dollars[1]] + ' thousand ' + ones[dollars[2]] +
      ' hundred ' + tens[dollars[3]] + ones[dollars[4]] + ' and ' + cents + ' /100s dollars';
  }
  if(dollars.length === 6){
    return 'victory';
  }
  if(dollars.length === 7){
    return 'death';
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
// console.log(toEnglish(232.43));
// console.log(toEnglish(543.32));
// console.log(toEnglish(1234.56));
// console.log(toEnglish(4321.54));
console.log(toEnglish(12345.67));
