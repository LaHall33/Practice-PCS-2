using ClassesIntro.Classes;

var ani = new Animal("Huey", "Duck");
// ani.Name = "new name";   // used to change the name

Console.WriteLine(ani);
ani.Birthday();
Console.WriteLine(ani);

var jinja = new Animal("Jinja", "Sheepadoodle", 1);
Console.WriteLine(jinja);


var animalList = new List<Animal>() { ani, jinja };

foreach (var animal in animalList)
{
    Console.WriteLine(animal);
}
//Console.WriteLine($"{ani.Name} {ani.Type}" Age: { ani.Age});