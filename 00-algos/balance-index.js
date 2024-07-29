/* 
  Balance Index

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  A balance point is ON an index, not between indices.
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */

function balanceIndex(nums) {
  let totalSum = 0;                                     // set the totalsum to 0.

  for (let i = 0; i < nums.length; i++) {               // iterate through the loop

    totalSum += nums[i];                                // calculates the total sum of all elements in the array.
  }
  let leftSum = 0;                                      // initialize the left sum                                 

  for (let i = 0; i < nums.length; i++) {               // for loop
    const rightSum = totalSum - leftSum - nums[i];      // calculates the right Sum

    if (leftSum == rightSum) {                          // checks if leftsum and rightsum are equal
      return i;                                         // if equal return index
    }
    leftSum += nums[i];                                 // update the left sum
  }
  return -1;
}

const result1 = balanceIndex(nums1);
console.log(`${result1} should equal ${expected1}`);

const result2 = balanceIndex(nums2);
console.log(`${result2} should equal ${expected2}`);
