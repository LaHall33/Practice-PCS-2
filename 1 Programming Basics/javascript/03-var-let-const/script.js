/* 
  var, let, and const
  any of the above keywords may be used to create a variable
  
  let and const were added to JS in ES6 in 2015
  ES stands for ECMAScript
*/

// VAR
    // two possible scopes - global scope and function scope

var member = 'Scooby';              // global scope

function greeting() {
  member = 'Shaggy';                // function scope
  console.log(member);
}

greeting();                         // Call Function

console.log(member);                // Output: shaggy

// var keyword and hoisting

// LET and CONST have global or block scope

function print1To255() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

print1To255();                      // Call Function

// const creates a variable that cannot be redefined (constant)

const myNum = 2;
// myNum = 3; // TypeError

const muppet = {
  name: 'Kermit',
  occupation: 'Variety Show Host',
};

muppet['age'] = 23;

console.log(muppet);

muppet = { greeting: 'HELLO AND WELCOME' }; // TypeError