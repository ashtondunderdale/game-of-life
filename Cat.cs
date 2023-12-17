namespace cat;

internal class Cat
{
    public string Name;
    public double Age;
    public string Colour;

    public int Health;
    public int Hunger;
    public int Mood;

    private static Random random = new();

    public Cat(string name)
    {
        Name = name;

        Age = 0;
        Health = 10;
        Hunger = 10;
        Mood = 10;

        Colour = GetCatComplexion();
    }

    private string GetCatComplexion()
    {
        string[] colours = { "Black", "White", "Gray", "Brown", "Ginger"};
        string[] patterns = { "Spotted", "Striped" };

        int randomColourIndex = random.Next(colours.Length);
        int randomPatternIndex = random.Next(patterns.Length);

        return patterns[randomPatternIndex] + " " + colours[randomColourIndex];
    }

    public void CatInfo()
    {
        Console.WriteLine($"Name: {Name}    Age: {Age}\n\n" +
                          $"Health:  {Health}\n" +
                          $"Mood:    {Mood}\n" +
                          $"Hunger:  {Hunger}\n");
    }

    public void DecreaseHunger(int amount) => Hunger = Math.Max(0, Hunger - amount);

    public void DecreaseHealth(int amount) => Health -= amount;

    public void DecreaseMood(int amount) => Mood -= amount;

    public bool IsDead() => Health > 0;
}
