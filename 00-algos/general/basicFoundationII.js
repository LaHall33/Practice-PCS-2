/*
1.  Biggie Size - Given an array, write a function that changes all
 positive numbers in the array to the string "big".  
 Example: makeItBig([-1,3,5,-5]) returns that same array, 
 changed to [-1, "big", "big", -5].
 */


 function biggieSize(numString) {

     for (let i = 0; i < numString.length; i++){
         if(numString[i] > 0){
             numString[i] = 'big';
         }
     }
   return numString;
 }   
 let num = [-1, 3, 5, -5];
 console.log(num);

 console.log(biggieSize(num));


 /*
 2. Print Low, Return High - Create a function that takes in an array
  of numbers.  The function should print the lowest value in the array,
   and return the highest value in the array.
   */

   function printLowReturnHigh(arrList) {
    let min = arrList[0];
    let max = arrList[0];
  
    for (let i = 1; i < arrList.length; i++) {
      if (arrList[i] < min) {
        min = arrList[i];
      }
      if (arrList[i] > max) {
        max = arrList[i];
      }
    }
    console.log("Lowest is:", min);                     // Lowest is: -22
    
    console.log("Highest is:", max);                    // Highest is: 91
    
  }
  arrList = [27, 10, 91, 30, -22, 2];
printLowReturnHigh(arrList);            
  
/*
3. Print One, Return Another - Build a function that takes in an array
 of numbers.  The function should print the second-to-last value in the
  array, and return the first odd value in the array.
    */

  function printAndReturnAnother(arr) {
    console.log("Second-to-last value:", arr[arr.length - 2]);      // Print the second-to-last value in the array


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {                                     // Find and return the first odd value in the array
            return arr[i];
        }
    }
}

const myArray = [2, 88, 6, 1, 9, 10];
const result = printAndReturnAnother(myArray);
console.log("First odd value:", result);

/*
4. Double Vision - Given an array (similar to saying 'takes in an array'),
 create a function that returns a new array where each value in the original
array has been doubled.  Calling double([1,2,3]) should return [2,4,6] 
without changing the original array.
*/

function doubleVision(arr) {

    const doubledArray = []                             // Creates an emptly array to store the doubled values

    for(let i = 0; i < arr.length; i++){                // loop; arr starts at 0 and increases increments of 1 until the end of arr.
        doubledArray.push(arr[i] * 2);                  // formula to double then push the solution into the new arr
    }
    return doubledArray;                                // returns solution
}
let singleArr = [1, 3, 6, 8, 2, 3];                     // single arr declared
console.log("Singles: ", singleArr);                    // prints single arr
console.log("Doubles: ", doubleVision(singleArr));      // prints double arr

/*
5. Count Positives - Given an array of numbers, create a function to replace
 the last value with the number of positive values found in the array.
   Example, countPositives([-1,1,1,1]) changes the original array to 
   [-1,1,1,3] and returns it.
   */

   function countPositives(arr) {

    let positiveVal = 0;                            // initialize a counter for positive values
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveVal++;                          // if the value is positive, increase in increments of 1
        }
    }
    arr[arr.length - 1] = positiveVal;              // Replaces the last value in the array with the positive count.
    return arr;                                     // returns the modified array
   }
   let mixArr = [-1, 1, 1, 1];                              // array to test
   console.log("Original Array: ", mixArr);
   console.log("New Array: ", countPositives(mixArr));      // print

/*
6. Evens and Odds - Create a function that accepts an array.  Every time that
 array has three odd values in a row, print "That's odd!".  Every time the
  array has three evens in a row, print "Even more so!".
  */
  /**
   * 
   * @param {number[]} nums 
   */
  function evensAndOdds(nums) {
    let consecutiveEvenCount = 0;
    let consecutiveOddCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            consecutiveEvenCount++;
            if (consecutiveEvenCount === 3) {
                console.log("Even more so!");
                consecutiveEvenCount = 0;
                i -= 2;                                     // Skip the next two elements
            }
                                                            // Break the even streak
            consecutiveOddCount = 0;
        } else {
            consecutiveOddCount++;
            if (consecutiveOddCount === 3) {
                console.log("That's odd!");
                consecutiveOddCount = 0;
                i--;                                        // Rewind to the previous element
            }
                                                            // Break the odd streak
            consecutiveEvenCount = 0;
        }
    }
}
const nums = [1, 3, 5, 7, 2];
evensAndOdds(nums);

/*
7. Increment the Seconds - Given an array of numbers arr, 
add 1 to every other element, specifically those whose index 
is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log 
each array value and return arr.
*/
function incrementTheSeconds(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
    }
    for (let i = 0; i < arr.length; i++);
    return arr;
  
}
const myArr = [5, 2, 3, 6, 1, 2, 28, 2];
console.log("Original Array ", myArr);
console.log("Updated Array", incrementTheSeconds(myArr))

/*
8. Previous Lengths - You are passed an array (similar to saying 
'takes in an array' or 'given an array') containing strings.  
Working within that same array, replace each string with a number - 
the length of the string at the previous array index - and return the
 array.  For example, previousLengths(["hello", "dojo", "awesome"]) 
 should return ["hello", 5, 4]. Hint: Can for loops only go forward?
*/
function previousLengths(arr){
    const results = [];

    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
          results.push(arr[i - 1].length);
        } else {
          results.push(arr[i]);
        }
      }
    return results;
}
const stringArray = ["hello", "dojo", "awesome"];
console.log("Updated array:", previousLengths(stringArray));

/*
9. Add Seven - Build a function that accepts an array. Return a new array
 with all the values of the original, but add 7 to each. Do not 
 alter the original array.  Example, addSeven([1,2,3]) should return 
 [8,9,10] in a new array.
 */

 function addSeven(arr) {
    const addedSeven = [];
    for (let i = 0; i < arr.length; i++) {
        addedSeven.push(arr[i] + 7);
    }
    return addedSeven;
 }
 const arrLst = [1, 2, 3, 4, 5]
console.log("Original Array: ", arrLst);
 console.log("Add 7: ", addSeven(arrLst));

 /*
 10. Reverse Array - Given an array, write a function that reverses its 
 values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, 
 but now contains values reversed like so... [2,4,6,1,3].  Do this without 
 creating an empty temporary array.  (Hint: you'll need to swap values).
 */

 function reverseArray(arr) {
    // Swap values from both ends until the middle of the array
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

const fancyNum = [3, 1, 6, 4, 2];
console.log("Original array: ", fancyNum);
console.log("Reversed array:", reverseArray(fancyNum));

/*
11. Outlook: Negative - Given an array, create and return a new one containing 
all the values of the original array, but make them all negative (not simply 
multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
*/
function outlookNegative(arr) {
    const negativeArr = [];
    for (let i = 0; i < arr.length; i++){
        negativeArr.push(-Math.abs(arr[i]));
    }
    return negativeArr;
}
const origArr = [1, -3, 5];
console.log("Negative Array: ", outlookNegative(origArr));

/*
12. Always Hungry - Create a function that accepts an array, and prints 
"yummy" each time one of the values is equal to "food".  If no array values 
are "food", then print "I'm hungry" once.
*/
function alwaysHungry(arr) {
    let alwHungry = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("Yummy");
            alwHungry = true;
        }
    }
    if (!alwHungry) {
        console.log("I'm hungry ");
    }
}
const dinner = ["Cake", "BBQ", "Potato Salad", "food", "Beans"];
const breakfast = ["Eggs", "Bacon", "Sausage", "Toast"]
alwaysHungry(dinner);
alwaysHungry(breakfast);

/*
13. Swap Toward the Center - Given an array, swap the first and last values, 
third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,
"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,
2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
*/

function swapTowardTheCenter(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
                                                    // Swap elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move pointers
        left += 2;                                  // Move left pointer towards the center
        right -= 2;                                 // Move right pointer towards the center
    }
}
let arr1 = [true, 42, "Ada", 2, "pizza"];
swapTowardTheCenter(arr1);
console.log(arr1);                                  // Output: ["pizza", 42, "Ada", 2, true]

let arr2 = [1, 2, 3, 4, 5, 6];
swapTowardTheCenter(arr2);
console.log(arr2);                                  // Output: [6, 2, 4, 3, 5, 1]

/*
14. Scale the Array - Given an array arr and a number num, multiply all values in
the array arr by the number num, and return the changed array arr.  For example, 
scaleArray([1,2,3], 3) should return [3,6,9].
*/

function scaleTheArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;                              // Multiply each element by num
    }
    return arr;                                     // Return the modified array
}
let sArr = [1, 2, 3];
let num1 = 3;
console.log(scaleTheArray(sArr, num1)); // Output: [3, 6, 9]

let sArr2 = [-1, 0, 1, 2];
let num2 = 2;
console.log(scaleTheArray(sArr2, num2)); // Output: [-2, 0, 2, 4]