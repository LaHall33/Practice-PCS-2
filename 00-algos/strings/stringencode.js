/* 
  Given in an alumni interview in 2021.

  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
  // your code here
  if (str.length === 0) return "";

  let retStr = "";
  const strObj = {};

  // Step 1 traverse the string
  // step 2 for each letter, store its frequency in an object
  let temp = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    // compare the character we are currently looking at with the temp
    if (str[i] === temp) {
      // if they are the same, increment counter
      count++;
    } else {
      // if they are not the same, store the character as a key and its frequency as the value
      // and reset the counter and make the temp variable the new character
      strObj[temp] = count;
      count = 1;
      temp = str[i];
    }
  }
  // to make the final characters in the string work, store outside of the loop
  strObj[temp] = count;

  // step 3 traverse the object appending each key value pair to a string
  for (let key in strObj) {
    retStr += key;
    retStr += strObj[key];
  }
  console.log(retStr);
  // Step 4 Return the shortest string length (str)
  return retStr.length < str.length ? retStr : str;
  // if (ret.Str.length is less than str.length) will return string
  // else, return string
}

const result1 = encodeStr(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = encodeStr(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = encodeStr(str3);
console.log(`${result3} should equal ${expected3}`);

const result4 = encodeStr(str4);
console.log(`${result4} should equal ${expected4}`);
