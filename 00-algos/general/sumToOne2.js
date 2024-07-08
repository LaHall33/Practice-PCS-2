
function sumToOne(num){
    let sum = 0;

    // We need to use a do-while loop because the loop needs to iterate AT LEAST once. If we do a while loop then our condition of (sum >= 10) will fail instantly and the loop would not execute.
    do{
        sum = 0
        
        // Split the number into an array of digits (e.g. 131 => [1,3,1])
        const numArr = num.toString().split("")

        // Iterate through the loop and sum up the elements of the array
        for(var i = 0; i < numArr.length; i++){

            // We need to convert each element of the numArr back into a number as they're currently String types in the array
            sum += Number(numArr[i])
        }
        // We need to set num equal to the current sum as we'll need to repeat the previous tasks on the new sum IF it is not one digit
        num = sum 

        // Check our condition of whether our sum is one digit
    } while (sum >= 10)

    // Once we have our sum to be one digit (sum < 10) then we can return the value
    return sum;
}

console.log(sumToOne(793)) //1

console.log(sumToOne(5)) //5
console.log(sumToOne(20)) //2
console.log(sumToOne(849)) //3

