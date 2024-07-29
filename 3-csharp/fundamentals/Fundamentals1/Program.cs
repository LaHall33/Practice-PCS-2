// Fundamentals I

// Worked with Keimha Moore 7/22 during Labtime.

// See https://aka.ms/new-console-template for more information
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;

Console.WriteLine("Hello, World!");

// 1. Create a loop that prints all values from 1-255

for (int i = 1; i <= 255; i++)
{
    Console.WriteLine(i);
}

// 2. Create a new loop that generates 5 random numbers between 10 and 20.

var rand = new Random();

for (int i = 1; i <= 5; i++)
{
    var result = rand.Next(10, 21);
    {
        Console.WriteLine(result);
    }
}

// 3. Modify the previous loop to add the random values together and print the sum after the loop finishes.

int sum = 0;

for (int i = 1; i <= 5; i++)
{
    var result = rand.Next(10, 21);
    sum += result;

    Console.WriteLine(result);
}
Console.WriteLine("Sum: " + sum);

// 4. Create a new loop that prints all values from 1 to 100 that are divisible by 3 OR 5, but NOT both.

for (int i = 1; i <= 100; i++)
{
    if (i % 3 == 00 || i % 5 == 0)
    {
        Console.WriteLine(i);
    }
}

// 5. Modify the previous loop to print "Fizz" for multiples of 3 and "Buzz" for multiples of 5.

for (int i = 1; i <= 100; i++)
{
    if (i % 3 == 0)
    {
        Console.WriteLine("Fizz");
    }
    if (i % 5 == 0)
    {
        Console.WriteLine("Buzz");
    }
}

// 6. Modify the previous loop once more to now also print "FizzBuzz" for numbers that are multiples of both 3 and 5.

for (int i = 1; i <= 100; i++)
{
    if (i % 3 == 0)
    {
        Console.WriteLine("Fizz");
    }
    if (i % 5 == 0)
    {
        Console.WriteLine("Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0)
    {
        Console.WriteLine("FizzBuzz");
    }
}