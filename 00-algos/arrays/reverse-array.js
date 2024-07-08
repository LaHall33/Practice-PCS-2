// JSDoc- form of notation
/**
 * This function returns true if the given
 * word is a palindrome, and false if it is not.
 * @param {string} word 
 */
var word = "level"                          // Declare the variable "word" as level
function isPalindrome(word) {               // Make a function called isPalindrome(word)
    // use a while loop
    let start = 0;
    let end = word.length -1 ;              // loop will run until the last letter
    while (start < end) {                   // Comparing to see if they are equal
        if (word [start] !== word [end]){   //if the character of the word is not the same as the character in the end, will read false.
            return false;
        }
    
    start ++;       
    end--;
}
return true;
}
console.log(isPalindrome('word'))                          //Call the function.  The function will return True because word is what the computer is expecting. If you change 'word' it will be false.

/**
 * Define a function that, given an array,
 * reverses the order of the items in that array
 * in-place, returning that same array.
 * @param {any[]} arr
 */
function reversArr(arr){
    //your code here
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        //swap elements at the start and end
        let temp - arr[start];
        arr [start] = arr[end];
        arr [end] = temp;
    }
}