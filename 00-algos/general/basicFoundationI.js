// BASIC FOUNDATION I


// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function get1To255() {
  for (let i = 1; i < 256; i++) {
    console.log(i);
  }
}
get1To255();

// 2. Get even 1000
function getEven1000() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(getEven1000());

// 3. Sum odd 5000

function sumOdd5000() {
  let sum = 0;
  for (let i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOdd5000());

// 4. Iterate an array

function iterateAnArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(iterateAnArray([1, 2, 5]));
console.log(iterateAnArray([-5, 2, 5, 12]));

// 5. Find max

function maxOfArray(arr) {
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
maxOfArray([5, 6, 8, 5, 3, 1, 15]);

// 6. Find average

function findAverage(arr) {
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
findAverage([1, 2, 3, 4, 5]);

// 7. Array odd

function returnOddsArray1To50() {
  let oddArr = [];
  for (let i = 1; i <= 50; i += 2) {
    oddArr.push(i);
  }
  return oddArr;
}
let oddNum = returnOddsArray1To50();
console.log(oddNum);

// 8. Greater than Y

function greaterThanY(list, y) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > y) {
      count++;
    }
  }
  console.log(count);
}
greaterList = [5, 1, 8, 7, 3, 2, 10];
yValue = 5;
greaterThanY(greaterList, yValue);

// 9. Squares -

let numList = [5, 6, 8, 2, 4, 3, 1];
function squareArrayVals(aList) {
  for (let i = 0; i < aList.length; i++) {
    aList[i] = aList[i] * aList[i]; //arr[i] = Math.pow(arr[i], 2);
  }
  return aList;
}
console.log(squareArrayVals(numList));

// 10. Negatives

let arrWithNeg = [5, -6, -8, 2, 4, -3, 1];
function zeroOutListNeg(allVal) {
  for (let i = 0; i < allVal.length; i++) {
    if (allVal[i] < 0) allVal[i] = 0;
  }
  return allVal;
}
console.log(zeroOutListNeg(arrWithNeg));

// 11. Max/Min/Avg

mmaList = [5, 4, 2, 9, 7, 8, 4, 2, 9];
function maxMinAverage(arr) {
  if (arr.length === 0) {
    console.log("[] arr, no min/max/avg");
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let average = sum / arr.length;

  console.log("Maximum Val:", max);
  console.log("Minimum Val:", min);
  console.log("Average Val:", average);
}
maxMinAverage(mmaList);

// 12. Swap Values

x = [1, 3, 5, 7];
console.log(x);
function swapValues() {
  let tempnum = x[0];
  x[0] = x[3];
  x[3] = tempnum;
  console.log(x);
}
swapValues();

// 13. Number to String

let xNum = [-1, 3, -5, 7];
console.log(xNum);
function numToString(numString) {
    for (let i = 0; i < numString.length; i++){
        if(numString[i] < 0){
            numString[i] = 'Dojo';
        }
    }
  return numString;
}
console.log(numToString(xNum));