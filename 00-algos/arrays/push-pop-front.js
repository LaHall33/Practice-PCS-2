/*   7/2/2024
  PushFront
  Given an array and an additional value, ​insert this
  value ​at the beginning of the array. Do this without
  using any built-in array methods. Return the modified
  array.
*/

/**
 * pushFront inserts the given value at index 0 of the
 * given array.
 * @param {any[]} arr
 * @param {any} val
 * @returns {any[]}
 */
function pushFront(arr, val) {                              // Declare the function with the name 
    // your code here 


    for (let i = arr.length; i > 0; i--){
        arr[i] = arr[i - 1];
        

    }
    arr[0] = val;
    return arr;
}    
    let myArr = [2,3,4,5];
    console.log(pushFront(myArr, 6));

  
  /* 
    PopFront
    Given an array, ​remove and return the value ​at the
    beginning of the array. Do this without using any
    built-in array methods except ​pop()​.
  */
  
  /** /*
   * popFront removes and returns the value at index 0
   * of the given array.
   * @param {any[]} arr
   * @returns {any}
   */


  function popFront(arr) {
    if (arr.length === 0) {
        console.log('The array is empty.');
        return;
    }
    
    let pops = arr[0];
    for(let i = 1; i < arr.length; i++) {

        arr[i - 1] = arr[i];                    //shifted everything to the left.
    }
    arr.pop()                                   // "pop" the last value of the array off. Removes the last index
    console.log(arr)
    return pops;                                // return the value 
  }
console.log(popFront([2, 4, 3, 5]))