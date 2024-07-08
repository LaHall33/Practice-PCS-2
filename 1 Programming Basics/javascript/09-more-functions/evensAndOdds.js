/*
Evens and Odds - Create a function that accepts an array.  
Every time that array has three odd values in a row, print "That's odd!".  
Every time the array has three evens in a row, print "Even more so!".

[1, 3, 5, 7, 2] = two three in a rows
*/
/**
 * 
 * @param {number[]} nums 
 */
function evensAndOdds(nums) {
    let consecutiveEvenCount = 0;
    let consectutiveOddCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            consecutiveEvenCount++;
            if(consecutiveEvenCount === 3){
                console.log("Even more so!");
                consecutiveEvenCount = 0
                i-= 2;
            }
            // broken the odd streak
            consectutiveOddCount = 0
        } else {
            consectutiveOddCount++;
            if (consectutiveOddCount === 3) {
                console.log("That's odd!");
                consectutiveOddCount = 0;
                i--;               
            }
            // broken the even streak 
            consecutiveEvenCount = 0;
        }
    }
}
const nums = [1, 3, 5, 7, 2];
evensAndOdds(nums);