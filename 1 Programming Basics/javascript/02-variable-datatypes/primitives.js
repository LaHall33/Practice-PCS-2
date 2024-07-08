/* 
  Strings
*/

// string literal syntax
let myName = 'Narciso';
console.log(typeof myName);

// strings get turned into objects
console.log(myName.split(''));

// spend some time getting to know string methods

/*
  Numbers
*/

// In JavaScript, there is no distinction between integers and floats/doubles.

const pi = 3.14159;
console.log(typeof pi);

const piString = pi.toFixed(2); // returns a string
console.log(piString, typeof piString);

// Math library
// We can use the Math library for useful methods

const piFloored = Math.floor(pi);
console.log(piFloored);

const piCeilinged = Math.ceil(pi);
console.log(piCeilinged);

console.log(typeof Math.trunc(pi)); // returns a number

/**
 * Return an integer from 1 to 6.
 */
function diceRoll(sides) {
  const rand = Math.floor(Math.random() * sides + 1);
  return rand;
}

console.log(diceRoll(20));

/* 
  Booleans
  Boolean values can be either true or false
*/

// boolean literal
let isSunny = true;

// naming convention is a question

// Arithmetic operators
// +, -, *, /, **, %

// Modulus returns the remainder of division

console.log(5 % 2);                 // even or odd

function isEven (number) {          //check if the number is even
    return number % 2 === 0;
  }
  
  
  function isOdd (number) {         //check if the number is odd
    return number % 2 !== 0;
  }
  
  //test
  console.log(isEven(5));           //false
  console.log(isEven(4));           //true
  console.log(isOdd(5));            //true
  console.log(isOdd(4));            //false

console.log(123 % 3 === 0);         // determining multiples


// sidebar about double vs triple equal signs
console.log(0 == false);            // true // double equal checks value only for equality
console.log(0 === false);           // false // tripe equal checks value and datatype for equality

// Assignment operators
// =, +=, -=, *=, /=

let newNum = 1;

newNum = newNum + 2;
newNum += 2;

console.log(newNum);

// Logical operators
// ==, !=, ===, !==, <, <=, >, >=, &&, ||

console.log(newNum > 2 || isSunny === false); // true
console.log(newNum > 2 && isSunny === false); // false