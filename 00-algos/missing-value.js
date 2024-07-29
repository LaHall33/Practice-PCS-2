/* 
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
  var minNum = unorderedNums[0];
  var maxNum = unorderedNums[0];
  const n = unorderedNums.length;
  let actualSum = 0;
  let expectedSum = 0;

  if (n === 0) {
    // edge case
    return null;
  }

  for (let num of unorderedNums) {                  // finding the minimum and maximum numbers in the array
    if (num < minNum) {
      minNum = num;
    }
    if (num > maxNum) {
      maxNum = num;
    }
    actualSum += num;
  }
  for (let i = 0; i <= maxNum; i++) {
    expectedSum += i;
  }
  let missingValue = expectedSum - actualSum;

  if (missingValue === 0) {
    return null;
  }

  return missingValue;
}
console.log(missingValue(nums1));
console.log(missingValue(nums2));
console.log(missingValue(nums3));
console.log(missingValue(nums4));


/* This function works along with the Bonus.


function missingValue(unorderedNums) {
    // your code here
    let min = unorderedNums[0];
    let max = unorderedNums[0];
    let n = unorderedNums.length;
    for (let num of unorderedNums) { // finding the minimum and maximum numbers in the array
      if (num < min) {
          min = num;
      }
      if (num > max) {
          max = num;
      }
    }
    for (let i = 0; i < n; i++) {
      if (!unorderedNums.includes(min)) { // checking 
          return min;
      }
      min++
      if (min > max) {
          break;
      }
    }
    return null;
  }
  console.log(missingValue(nums1));
  console.log(missingValue(nums2));
  console.log(missingValue(nums3));
  console.log(missingValue(nums4));

  */