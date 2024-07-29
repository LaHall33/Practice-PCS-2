// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


string name = "Andy";
Console.WriteLine(name);

Console.WriteLine(name.EndsWith('q'));


int number = 2;
long longNumber = 2;

Console.WriteLine(number);
Console.WriteLine(longNumber);

double pi = 3.14;
double anotherDouble = 4.2;
float bigPi = 3.14F;

Console.WriteLine(pi);
Console.WriteLine(bigPi);

Console.WriteLine(pi + anotherDouble);
Console.WriteLine(anotherDouble + bigPi);


// for loop
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}


// while loop
int j = 1;
while (int j <= 10) {
    Console.WriteLine(j);
    j++;
}

// do while loop
// executes the loop at least once 
int k = 1;
do
{
    Console.WriteLine(k);
    k++;
}
while (k <= 10);

// Random Numbers
// new keyword creates an instance of a class (object)
var rand = new Random();
for (int i = 1; i <= 100; i++)
{

}
Console.WriteLine(rand.Next(10));


// to print random numbers from 1-15 and 
for (int i = 1; i < 16; i++)
{
    var result = rand.Next(1, 11);
    if (result == 1 || result == 7)
    {
        Console.WriteLine(result);
    }
}