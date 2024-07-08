/*
    Arrow Functions

    ES6 EcmaScript6 2015 - changed the game
    ES6 changed the way we all write JavaScript
    
    "Syntactic Sugar"


      let, const, arrow functions, etc. 

    */

// Function Declaration
function greet() {
    console.log('Hello!');
}

greet();

// In Javascript functions are "first class citizens."
// That means that we can do anything with functions that we can do with other objects.
// Example:
    // pass a function as an arsgument to another function
    // return a function from another function
    // assign a function as a value of a variable.


// Function Expression

const greetExpression = function() {                            // we assign an anonymous function as a variable. (funcion doesn't have a name.)
    console.log('Hello!');
}

greetExpression();
//________________________________________________________________________________________________________________________________________________________________________________

// Arrow Functions
const greetArrow = () => {                                      // initialize with const; name the variable greetArrow; make equal to () without the word function; make an arrow, then curly brackets;
    console.log('Hello!');

}
greetArrow();

// to Omit curly braces if function body is only one line
const greetOneLine = () => console.log('Hello!');

greetOneLine();

// parameters and arrow functions
const greetByName = (name) => console.log(`Hello, ${name}!`);

greetByName('Mya');

//if you only have one parameter, then you can omit the paraentheses

const greetByName2 = name => console.log(`Hello, ${name}!`);

greetByName2('LaNasha');

// if you have more than one parameter, parentheses are required
const greetTwoParams = (name, timeofDay) =>
    console.log(`Good ${timeofDay}, ${name}!`);

greetTwoParams('Max', 'morning');

// if there are more than one line in the function body,
// curly braces are required

const printArrayVals = (arr)  => {
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
    
}
printArrayVals([1, 2, 3]);

// if your function body is 1 line you can omit the return keyword

const add = (num1, num2) => num1 + num2;

console.log(add(2, 3));
// or you can write line 82 like const result = add(2, 3); then console.log(result);

// If the function body has more than one line,
// then the return keyword is required.
// Example:
const add2 = (num1, num2) => {
    const result = num1 + num2;
    return result;
};