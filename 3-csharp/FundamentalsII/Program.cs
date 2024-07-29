// Fundamentals II


// Create an integer array with the values 0 through 9 inside.

int[] numArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };                          // Create an integer array

for (int idx = 0; idx < numArray.Length; idx++)                             // for loop to print out all numbers
{
    Console.WriteLine(numArray[idx]);                                       // print numbers 0-9
}


//Create a string array with the names "Tim", "Martin", "Nikki",
// and "Sara".


string[] names = new string[] { "Tim", "Martin", "Nikki", "Sara" };         // Declare the string names

for (int i = 0; i < names.Length; i++)                                      // iterate through the loop
{
    Console.WriteLine(names[i]);                                            // Print the names.
}


// Create a boolean array of length 10. Then fill it with alternating
// true/false values, starting with true. (Tip: do this using logic! 
// Do not hard-code the values in!)

bool[] trueOrFalse = new bool[10];

for (int a = 0; a < trueOrFalse.Length; a++)                                // iterate through the loop.
{
    trueOrFalse[a] = (a % 2 == 0);                                          // makes all even numbers true and all odd numbers false

    Console.WriteLine(trueOrFalse[a]);                                      // Prints true or false 10 times

}

//Create a string List of ice cream flavors that holds at least 5
// different flavors. (Feel free to add more than 5!)

List<string> iceCream = new List<string>();

iceCream.Add("Vanilla");
iceCream.Add("Chocolate");
iceCream.Add("Strawberry");
iceCream.Add("Buttered Pecan");
iceCream.Add("Banana Split");

// Output the length of the List after you added the flavors.

Console.WriteLine($"There are {iceCream.Count} flavors of ice cream.");

// Output the third flavor in the List.

Console.WriteLine(iceCream[2]);

// Now remove the third flavor using its index location.

iceCream.RemoveAt(2);

// Output the length of the List again. It should now be one fewer.

Console.WriteLine($"There are {iceCream.Count} flavors of ice cream.");

// Create a dictionary that will store string keys and string values

Dictionary<string, string> profile = new Dictionary<string, string>();

// Add key/value pairs to the dictionary where:
// Each key is a name from your names array (this can be done by hand or using logic)
// Each value is a randomly selected flavor from your flavors List (remember Random from earlier?)

Random rand = new Random();

foreach (string name in names)
{
    string randomFlavor = iceCream[rand.Next(iceCream.Count)];
    profile.Add(name, randomFlavor);
}

// Loop through the dictionary and print out each user's name and their associated ice cream flavor.
foreach (var entry in profile)
{
    Console.WriteLine($"{entry.Key}: {entry.Value}");
}


