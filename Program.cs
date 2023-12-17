namespace cat;

internal class Program
{
    public static Cat CAT;

    static void Main()
    {
        CreateCat();
    }

    public static void CreateCat() 
    {
        Console.WriteLine("What will you call your new cat?");
        string? catName = Console.ReadLine();

        if (string.IsNullOrEmpty(catName)) CreateCat();

        Console.WriteLine($"\n{catName.ToUpper()}!! has been created");
        Console.ReadKey();
        Console.Clear();

        Cat cat = new(catName);
        CAT = cat;

        Dashboard();
    }

    public static void Dashboard() 
    {
        while (true) 
        {
            CAT.CatInfo();

            if (CAT.Hunger < 1) Console.WriteLine("Your cat is literally STARVING.");
            else if (CAT.Hunger < 5) Console.WriteLine("Your cat is HUNGRY.");

            Thread.Sleep(100);
            CAT.DecreaseHunger(1);

            Console.Clear();
        }
    }
}