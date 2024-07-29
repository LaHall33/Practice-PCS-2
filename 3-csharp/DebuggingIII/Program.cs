// 1. Iterate and Print Values
/*
static void PrintList(List<string> MyList)
{
    for (int i = 0; i < MyList.Count; i++)
    {
        Console.WriteLine(MyList[i]);
    }
}
List<string> TestStringList = new List<string>() { "Harry", "Steve", "Carla", "Jeanne" };
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
List<int> TestIntList = new List<int>() { 2, 7, 12, 9, 3 };

SumOfNumbers(TestIntList);                          // You should get back 33 in this example


// 3. Find Max
static int FindMax(List<int> IntList)
{
    return IntList.Max();
}

List<int> TestIntList2 = new List<int>() { -9, 12, 10, 3, 17, 5 };

Console.WriteLine(FindMax(TestIntList2));

FindMax(TestIntList2);                              // You should get back 17 in this example

*/
// 4. Square the Values

static List<int> SquareValues(List<int> intList)
{
    // Your code here
    for (int i = 0; i < intList.Count; i++)
    {
        intList[i] = intList[i] * intList[i];
    }
    return intList;

}

var TestIntList3 = new List<int>() { 1, 2, 3, 4, 5 };

SquareValues(TestIntList3);
foreach (var value in TestIntList3)
{
    Console.WriteLine(value);
}


// 5. Replace Negative Numbers with 0

static int[] NonNegatives(int[] IntArray)
{
    return IntArray.Select(num => Math.Max(0, num)).ToArray();
}

var TestIntArray = new int[] { -1, 2, 3, -4, 5 };
var result = NonNegatives(TestIntArray);

foreach (var item in result)
{
    Console.WriteLine(item);
}

// 6. Print Dictionary

static void PrintDictionary(Dictionary<string, string> MyDictionary)
{
    foreach (var name in MyDictionary)
    {
        Console.WriteLine(($"{name.Key}: {name.Value}"));
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
    return MyDictionary.ContainsKey(SearchTerm);
}

Console.WriteLine(FindKey(TestDict, "RealName"));                           // This should print true

Console.WriteLine(FindKey(TestDict, "Name"));                               // This should print false

// 8. Generate a Dictionary


List<string> Names = new List<string>

static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    

}



// Your test code here


// Ex: Given ["Julie", "Harold", "James", "Monica"] and [6,12,7,10], return a dictionary
// {
//	"Julie": 6,
//	"Harold": 12,
//	"James": 7,
//	"Monica": 10
// } 

