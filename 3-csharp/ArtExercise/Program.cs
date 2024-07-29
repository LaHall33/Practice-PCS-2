using ArtExercise.Classes;

var art = new Art("The Owl", "Shanna", 2016);

Console.WriteLine(art.DisplayDetails());

var painting = new Painting("Starry Night", "Van Gogh", 1889, "oil");
Console.WriteLine(painting.DisplayDetails());

var digtal = new DigitalArt("Cherry Blossom", "Max", 2021, "Blender");
Console.WriteLine(digtal.DisplayDetails());

var sculp = new Sculpture("The Thinker", "Auguste Rodin", 1904, "Bronze");
Console.WriteLine(sculp.DisplayDetails());