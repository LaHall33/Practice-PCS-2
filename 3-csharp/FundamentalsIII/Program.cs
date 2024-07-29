// Fundamentals III

using System.ComponentModel.DataAnnotations;
using System.Globalization;

// 1. Iterate and print values
static void PrintList(List<string> MyList)
{
    foreach (var name in MyList)
    {
        Console.WriteLine(name);
    }
}
var TestStringList = new List<string>() { "Harry", "Steve", "Carla", "Jeanne" };
PrintList(TestStringList);

// 2. Print Sum
static void SumOfNumbers(List<int> IntList)
{
    int sum = 0;
    for (int i = 0; i < IntList.Count; i++)
    {
        sum += IntList[i];
    }
    Console.WriteLine(sum);
}
var TestIntList = new List<int>() { 2, 7, 12, 9, 3 };

SumOfNumbers(TestIntList);                                      // You should get back 33 in this example

// 3. Find Max
static int FindMax(List<int> IntList)
{
    int max = IntList[0];
    foreach (int num in IntList)
    {
        if (num > max)
        {
            max = num;
        }
    }
    return max;
}

var TestIntList2 = new List<int>() { -9, 12, 10, 3, 17, 5 };
int maxValue = FindMax(TestIntList2);

Console.WriteLine(maxValue);                                    // You should get back 17 in this example

// 4. Square the Values
static List<int> SquareValues(List<int> IntList)
{
    for (int i = 0; i < IntList.Count; i++)
    {
        IntList[i] = IntList[i] * IntList[i];
    }
    return IntList;
}

List<int> TestIntList3 = new List<int>() { 1, 2, 3, 4, 5 };
var squaredValues = SquareValues(TestIntList3);
Console.WriteLine(string.Join(", ", squaredValues));


// 5. Replace Negative numbers with 0
static int[] NonNegatives(int[] IntArray)
{

    for (int i = 0; i < IntArray.Length; i++)
    {
        if (IntArray[i] < 0)
        {
            IntArray[i] = 0;
        }
    }
    return IntArray;
}
int[] TestIntArray = new int[] { -1, 2, 3, -4, 5 };
TestIntArray = NonNegatives(TestIntArray);
Console.WriteLine(string.Join(", ", TestIntArray));

// 6. Print Dictionary
static void PrintDictionary(Dictionary<string, string> MyDictionary)
{
    foreach (var person in MyDictionary)
    {
        Console.WriteLine($"{person.Key} - {person.Value}");
    }
}
Dictionary<string, string> TestDict = new Dictionary<string, string>();
TestDict.Add("HeroName", "Iron Man");
TestDict.Add("RealName", "Tony Stark");
TestDict.Add("Powers", "Money and intelligence");
PrintDictionary(TestDict);

// 7. Find Key
static bool FindKey(Dictionary<string, string> MyDictionary, string SearchTerm)
{
    foreach (var person in MyDictionary)
    {
        if (person.Key == SearchTerm)
        {
            return true;
        }
    }
    return false;
}

Console.WriteLine(FindKey(TestDict, "RealName"));                   // This should print true
Console.WriteLine(FindKey(TestDict, "Name"));                       // This should print false

// 8. Generate a Dictionary
// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//   "Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
//};
static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)

{
    Dictionary<string, int> result = new Dictionary<string, int>();
    for (int i = 0; i < Names.Count; i++)
    {
        result.Add(Names[i], Numbers[i]);
    }
    return result;
}
List<string> Names = new List<string> { "Julie", "Harold", "James", "Monica" };
List<int> Numbers = new List<int> { 6, 12, 7, 10 };

Dictionary<string, int> TestDict2 = GenerateDictionary(Names, Numbers);

foreach (var people in TestDict2)
{
    Console.WriteLine($"{people.Key} - {people.Value}");
}