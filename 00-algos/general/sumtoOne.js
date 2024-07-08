/* 
  Sum To One Digit
  Implement a function ​sumToOne(num)​ that, given
  a number, sums that number’s digits repeatedly
  until the sum is only one digit. Return that
  final one digit result.

  Ex.
  sumToOne(5) // 5
  sumToOne(20) // 2
  sumToOne(849) // 3
*/

/**
 * This function takes in an integer as input and
 * sums that number’s digits repeatedly until the
 * sum is only one digit.
 * @param {number} num
 * @returns {number}
 */
function sumToOne(num) {
  // your code here
  let sum = 0;
  while (sum >= 10) {
    const sumToOneArr = num.toString().split().map((num) => {;
        let 
  });
}
const numString = num.toString()
console.log(numString);
const numStringArr = numString.split('');
console.log(numStringArr);
const numArr = numStringArr.map((num)=> Number(num))
console.log(numArr);
}
sumToOne(15);
