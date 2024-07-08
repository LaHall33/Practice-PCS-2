// Algorithm Practice - Arrays

// 1. Print Values and Sum

var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;                                            //will hold sum of the array elements

for (var i = 0; i < testArr.length; i++) {
    sum += testArr[i];                                  // Adds the sum to the test array element
    console.log(`Num ${testArr[i]}, Sum ${sum}`);       // Print statements
}

// 2. Value * Position
for (var i = 0; i < testArr.length; i++) {
    var multiArr = testArr[i] * i;                      // Multiply value of array by position(i)
    console.log(` ${multiArr}`);                        // Print Array
}
