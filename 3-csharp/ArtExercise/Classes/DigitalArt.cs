namespace ArtExercise.Classes;

public class DigitalArt : Art
{
  public string Software { get; set; }

  public DigitalArt(string title, string artist, int year, string software) : base(title, artist, year)
  {
    Software = software;
  }

  public override string DisplayDetails()
  {
    return $"Title: {Title}, Artist: {Artist}, Year: {Year}, Software: {Software}";
  }

}