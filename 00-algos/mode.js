/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
  // your code here
  //   edge case to begin
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return nums;
  }
  // object to count
  const frequency = {};
  let maxCount = 0;
  // count occurrences of each number
  for (const num of nums) {
    if (frequency.hasOwnProperty(num)) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
    // update maxCount
    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
    }
  }
  // collect all numbers with the maximum
  const modes = [];
  for (const num in frequency) {
    if (frequency[num] === maxCount) {
      modes.push(Number(num));
    }
  }
  if (modes.length === Object.keys(frequency).length) {
    return [];
  }
  return modes;
}



console.log(mode[nums1]);