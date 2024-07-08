// The "Basic 13"
 /*
// 1. Print 1 - 255

 function print1To255() {                       // Start by declaring the function and naming it
    for(let i = 1; i < 256; i++) {              // Define what the function is for. This starts at 1 and keeps increasing until it reaches 255.
        console.log(i);                         // Will print numbers 1-255 
    }
 }
 print1To255();                                 // Call the function 

// 2. Print Odds 1-255

function printOdds1To255() {                    // Start by declaring the function and naming it
    for(let i = 1; i < 256; i++) {              // Define what the function is for. This starts at 1 and keeps increasing until it reaches 255.
      if (i % 2 !== 0) {                        // Checks if numbers are not even (!==).  Verifies odd numbers will be pulled.
        console.log(i)                          // Will print odd numbers 1-255 
      }
    }
}
printOdds1To255();                              // Call the function

// 3. Print Ints and Sum 0-255

function printIntsAndSum0To255() {              // Start by declaring the function and naming it
    let sum = 0                                 // sum is used to have something to add to each int
    for(let i = 0; i < 256; i++){               // Function starts at 0 and keeps increasing until it reaches 255 in increments of 1.
        sum = sum + i;                          // adding sum to i; (0+0) then 0+1, 1+2, etc... and storing the answer into sum to keep going
        console.log('Sum: ' + sum);             // Print each sum
    }
}
printIntsAndSum0To255();                        // Call the function


// 4. Iterate and Print Array

function printArrayVals(arr) {                                           // Start by declaring the function and naming it
    for (var index = 0; index < arr.length; index++){
        console.log("array{", index, "] is equal to ", arr[index]);
    }
}
printArrayVals([8,2,3,4,5,6,7]);

// 5. Find and Print Max

function printMaxOfArray(arr) {
    if (arr.length == 0) {
        console.log("The array is empty.");
        return;
    }
    var max = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] > max) {
            max = arr[idx];
        }
    }
    console.log("Max value is:", max);
}
printMaxOfArray([5,6,8,5,3,1,15]);


// 6. Get and Print Average


function printArrayAverage(arr) {
    if (arr.length == 0) {
    console.log("This array is empty. ");
    return;
    }
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
    }
    console.log("Average value is:", sum / arr.length);
    }
    printArrayAverage([1,2,3,4,5]);

// 7. Array with Odds

    function returnOddsArray1To255() {
        let oddArr = [];
       for (let i = 1; i < 256; i += 2) {
            oddArr.push(i);
       }
       return oddArr;
    }
    let oddNum = returnOddsArray1To255();
    console.log(oddNum);

*/

// 8. Square the Values


function squareArrayVals(list) {
    let arr = [5,6,8,2,4,3,1];
    let sqrArr = [];
    for (let i = 0; i < arr.length; i++) {
        sqrArr[i] = arr[i] * arr[i];                    //arr[i] = Math.pow(arr[i], 2);
    }
    console.log([arr]);
    console.log([sqrArr])
}
squareArrayVals(list);

/*
// 9. Greater than Y.

function printArrayCountGreaterThanY(arr, y) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > y) {
            count++;
            console.log(arr[i] + 'is greater than' + y);
        }
    }
}
printArrayCountGreaterThanY(arr, y);


function greaterThanY (list, y) {
    let count = 0;
    for(let i = 0; i < list.length; i++) {
    if (list[i] > y) {
    count++;
    }
    }
    console.log(count);
    }
    greaterList = [5, 1, 8, 7, 3, 2, 10];
    yValue = 5;
    greaterThanY(greaterList, yValue);