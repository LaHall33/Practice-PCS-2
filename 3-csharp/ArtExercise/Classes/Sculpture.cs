namespace ArtExercise.Classes;

public class Sculpture : Art
{
  public string Material { get; set; }

  public Sculpture(string title, string artist, int year, string material) : base(title, artist, year)
  {
    Material = material;
  }

  public override string DisplayDetails()
  {
    return $"Title: {Title}, Artist: {Artist}, Year: {Year}, Material: {Material}";
  }

}