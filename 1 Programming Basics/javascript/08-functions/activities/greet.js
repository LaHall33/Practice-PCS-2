//  User input

// to get user input, this template needs to be at the top of the function.

const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/* Write a function 
*/
rl.question("What's your name? " , (name) =>{
    console.log(`Hello, ${name}!`);
    rl.close();

}) ;