// Predict 1 

var arr = [8,6,7,5,3,0,9]                           // makes an array of 6 indexes
for(var i = 0; i < arr.length; i++){                // intialize i to equal 0; i less than 7; increment adds 1 to i making i = 1 ; i represents the current place of the array
    console.log(arr[i]);                            // print list
}
/*
Predicted Output:
8
6
7
5
3
0
9
*/

// Predict 2

var arr = [7,3,8,4,2,0,1];                          // makes an array of 7 indexes 0-6              
for(var i = 0; i < arr.length; i++){                // if i is less than 6; add 1 each time the loop runs until it ends
    if(arr[i] % 2 == 0){                            // checks if even
        console.log(arr[i]);                        // print the even number
    } 
    else{
        console.log("That is odd!");                // if the number is odd, will print msg.
    }
}

/* 
Predicted Output:
That is odd!
That is odd!
8
4
2
0
That is odd!
*/

// Predict 3
var arr = [1,3,8,-5,0,-2,4,-1];                     // Makes an array of 8 indexes 0-7
var newArr = [];                                    // Add a new blank array
for(var i = 0; i< arr.length; i++){                 // i less than 8; i increases by 1 each loop
    if(arr[i] < 0){                                 // if i less than 0, push into new array
        newArr.push(arr[i]);                        
        arr[i] = arr[i] * -1;                       // multiplying each number by -1
    }
    else if(arr[i] == 0){                           // if i is 0, display msg "Zero"
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;                       // if neither above is true, then multiply i by -1 
    }
}
console.log(arr);                                   // Predicted print: -1, -3, -8, 5, Zero, 2, -4, 1
console.log(newArr);                                // -5, -2, -1
