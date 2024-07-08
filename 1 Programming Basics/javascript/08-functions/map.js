// Array.map Method

//we want each number in the array doubled.  This is how:

const numsArr = [1, 2, 3]                                       // this is the array given

const doubledNumsArr = numsArr.map((num) => num + num);         // this const provides a space to pass the doubled array through 

console.log(doubledNumsArr);                                    // console log to show the new array

// Output:  [2, 4, 6]