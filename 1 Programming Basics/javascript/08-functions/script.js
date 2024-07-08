/* 
    Functions
    Functions are blocks of reusable code that accomplishes a task.
    */

    

    // Rules of variable and function names:
    // 1. Cannot start with a number
    // 2. Cannot contain a hyphen
    // 3. Cannot use a reserved keyword

    // Guidelines: 
    // camelCase should be used.

    // Syntax
    // Function Declaration


    function greeting() {                               // Type function, name function(), curly brace start, place code in block in between curly braces.
        // Code Block
        console.log('Hello!');
    }

    greeting();                                         // Function invocation (Calling the function).  Call the function by name and add parenthesis to invoke it
//_____________________________________________________________________________________________________________________________________________________________________________________

    // Parameters and Arguments
    // If the function requires input, we define 
    // "parameters" to accept the input

    function greetingWithName(name) {                       // Type function, name the function, supply it with a parameter (name)
        console.log(`Hello ${name}!`);                      // Console log with 
    }

    greetingWithName("LaNasha");                            // Call the function

//__________________________________________________________________________________________________________________________________________________________________________________
// Functions with multiple parameters

    function greetingWithNameAndTime(name, timeofDay) {                  // Type function, name the function, supply it with a parameter (name)
        console.log(`Good ${timeofDay}, ${name}!`);                     // Console log and 
    }

    greetingWithNameAndTime('LaNasha','Morning'); 
//__________________________________________________________________________________________________________________________________________________________________________________

// Return Statements
// function can optionally return a value
// if a function does not return a value
// it implicitly  returns undefined
// Example:
//function doesNothing(){                                 // if the function is blank it will return undefined. I noted it out so that the next examples can run.

//}
//console.log(doesNothing());
//__________________________________________________________________________________________________________________________________________________________________________________

// Implementing return statements
function greetingWithNameAndTimeWithReturn(name, timeofDay) {
    return `Good ${timeofDay}, ${name}!`;
}
greetingWithNameAndTimeWithReturn('Ronhemm', 'evening');

// The value of a function is whatever that function returns
// The return value can "escape the function"

//__________________________________________________________________________________________________________________________________________________________________________________

// Default Parameters

// Function overloading; 1 function has 1 parameter and the other one has 2 parameters

function greetingWithDefaults(name = 'friend', timeofDay = 'day') {
    return 'Good ${timeofDay}, ${name}!';
}

function greetingWithDefaults(name = 'friend'){
    return 'Good evening, ${name}';
}

let greetingResult = greetingWithDefaults();
let greetingResult2 = greetingWithDefaults('Mauro');
let greetingResult3 = greetingWithDefaults('Irina', 'afternoon');
console.log(greetingResult);
console.log(greetingResult2);
console.log(greetingResult3);