const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
/*
 Write a JavaScript program that simulates a guessing game.
  The program should generate a random number between 1
  and 100, and then ask the user to guess the number. If
  the user's guess is higher than the actual number, the
  program should print "Too high, try again." If the guess
  is lower, the program should print "Too low, try again."
  The game should continue until the user correctly
  guesses the number.

Example Output:
    * Guess the number (between 1 and 100): 50
        To high, try again.
    * Guess the number (between 1 and 100): 30
        Too low, try again
    * Guess the number (between 1 and 100): 40
        Too low, try again
    * * Guess the number (between 1 and 100): 45
        Congragulations! You guessed the number correctly.

*/

// PSEUDOCODE
// WHAT TO DO BEFORE WE FIGURE HOW TO DO IT

/*
Generate a random number
import readline, create a readline interface

while loop (guess != random num)
    conditionals: if, guess > random number: too high
                  else, if guess < random number: too low

Outside loop : congragulations

*/
function generateRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}
async function guessTheNumber() {
    const randomNum = generateRandomNum();
    const guess = await promptUser();
    while ( guess != randomNum) {
        if (guess > randomNum) {
            console.log('Too high, try again.');
        }   else if (guess < randomNum) {
            console.log('Too low, try again.');
        }
        guess = await promptUser();
    }
    rl.close();
    console.log(`Congragulations! You guessed the number. It was ${randomNum}`);
}

 async function promptUser() {
    let guess = await rl.question('Guess the number (between 1 and 100): ');
    console.log(guess);
    
    return guess;
}
guessTheNumber();