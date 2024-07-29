// Recursion

//3 requirements
// 1. Base Case:   Gets us out of the loop
// 2.  Progression:  to base case
// 3. Recursive call; the call to itself inside itself.

// Print 1-255

function print1To255(i = 1){
    if (i > 255){
        return;
    }
    console.log(i);
    return print1To255(i + 1);
}

print1To255();