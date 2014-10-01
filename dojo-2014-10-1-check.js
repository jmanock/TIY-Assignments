


function numbersToWords(a){
  if (a === 1){
    return "one";
  }
  if (a === 2){
    return "two";
  }
  if (a === 3){
    return "three";
  }
}
// Test
console.log('it should take 1 and return "one"',
numbersToWords(1)==="one");

console.log('it should take 2 and return "two"',
numbersToWords(2)==="two");

console.log('it should take 3 and return "three"',
numbersToWords(3) === "three");
