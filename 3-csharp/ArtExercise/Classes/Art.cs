namespace ArtExercise.Classes;

public class Art
{
  public string Title { get; set; }
  public string Artist { get; set; }
  public int Year { get; set; }

  public Art(string title, string artist, int year)
  {
    Title = title;
    Artist = artist;
    Year = year;
  }
  public virtual string DisplayDetails()
  {
    return $"Title: {Title}, Artist: {Artist}, Year: {Year}";
  }
}