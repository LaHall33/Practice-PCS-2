namespace ArtExercise.Classes;

public class Painting : Art
{
  public string Medium { get; set; }

  public Painting(string title, string artist, int year, string medium) : base(title, artist, year)
  {
    Medium = medium;
  }

  public override string DisplayDetails()
  {
    return $"Title: {Title}, Artist: {Artist}, Year: {Year}, Medium: {Medium}";
  }

}