// Get user input and print the number.  Also uses concatenation to add 10 plus the input.
/*
Console.WriteLine("Type a number, then hit enter: ");
string NumberInput = Console.ReadLine();
Console.WriteLine(10 + NumberInput);
*/

// Get user input and print the number.
/*
Console.WriteLine("Type a number, then hit enter: ");
string NumberInput = Console.ReadLine();
*/


// To actually add integers together.
// TryParse takes 2 parameters: the item to be parsed and a variable
// you would like to output (out) to if it is successful

/* if (int.TryParse(NumberInput, out int parsedValue))
{
    // Notice how we used j instead of NumberInput
    Console.WriteLine($"The integer was {parsedValue}");
    Console.WriteLine(10 + parsedValue);
}
*/


// Converting a number into a decimal
string aNumber = "7";
int converted = Convert.ToInt32(aNumber);
Console.WriteLine(14 + converted); // should print 21
string aDecimal = "3.14";
double convertDec = Convert.ToDouble(aDecimal);
Console.WriteLine(1.8 + convertDec); // should print 4.94

