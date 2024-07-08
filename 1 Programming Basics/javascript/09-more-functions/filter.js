// Higher Order Function
// A higher order function is a function that accepts
// a function as input (callback functions)

function isEven(num) {
    return num % 2 === 0;                   // checks to see if the number is even
}

function isOdd(num) {
    return num % 2 !== 0;                   // checks to see if the number is odd.  
}


// Higher order function
function ourFilter(nums, callback) {
    const filteredNums = [];
    for (const num of nums) {
        if (callback(num)) {
            filteredNums.push(num);
        }
    }
    return filteredNums;
}

// DIY FILTERS
const evenNums = ourFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven);
console.log(`even numbers: ${evenNums}`);
const oddNums = ourFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isOdd);
console.log(`odd numbers: ${oddNums}`);


//USING FILTERS BUILT IN JAVASCRIPT
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];                           // the moment you use curly braces, you must use the Return 
const filteredEvenNums = nums.filter((num) => isEven{
    return num % 2 === 0;
})