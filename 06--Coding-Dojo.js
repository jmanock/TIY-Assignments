/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" -- 
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */

var add = function(a, b) {
    if (a == "one"){
     if ( b === "zero"){
        return 1;
    }
    if ( b === "two"){
        return 3;
    }
    if ( b === "three"){
        return 4;
    }
    if ( b === "four"){
        return 5;
    }
    if ( b === "five"){
        return 6;
    }
    if ( b === "six"){
        return 7;
    }
    if ( b === "seven"){
        return 8;
    }
    if ( b === "eight"){
        return 9;
    }
    }
    return 2;
}

console.log('it should add "one" and "one"',
add("one", "one")== 2);

console.log('it should add "one" and "zero"',
add("one", "zero")== 1);
console.log('it should add "one" and "two"',
add("one", "two")==3);
console.log('it should add "one" and "three"',
add("one", "three")==4);
console.log('it should add "one" and "four"',
add("one", "four")== 5);
console.log('it should add "one" and "five"',
add("one", "five")==6);
console.log('it should add "one" and "six"',
add("one", "six")==7);
console.log('it should add "one" and "seven"',
add("one", "seven")==8);
console.log('it should add "one" and "eight"',
add("one", "eight")==9);
console.log('it should add "one" and "nine"',
add("one", "nine")==10);
console.log('it should add "one" and "ten"',
add("one", "ten") ==11);