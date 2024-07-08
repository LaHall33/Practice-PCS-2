/* 
  insertAt
  Given an array, index, and additional value, ​insert
  the value into the array a​t the given index. Do this
  without using built-in array methods. Return the
  array.

  This means you, Rayven!
  
  You can think of ​pushFront(arr, val)​ as equivalent to
  insertAt(arr, 0, val)​.
*/

function insertAt(arr, idx, val) {
    if (arr.length === 0){
        arr[idx] = val;
        return arr;
    }
    if (idx < 0) {
        console.log("Index is negative!");
        return;
    }
    if (idx > arr.length) {
        arr[idx] = val;
        return arr;
    }   
    for (let i = arr.length; i >= idx; i--) {
        arr[i] = arr[i-1]
    }
    arr[idx] = val;
    return  arr;
  }
  const myArray =[1, 2, 5, 6];
  console.log(insertAt(myArray, 2, 5));
  
  /* 
    removeAt
    Given an array and an index into the array, remove and
    return the array value ​at that index. Do this without
    using any built-in array methods except ​pop()​.
  
    Think of popFront(arr)​ as equivalent to removeAt(arr, 0).​
  */
  
  function removeAt(arr, idx) {
    // your code here
 
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

  }