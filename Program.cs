using System;
using System.Threading;

class Program
{
    const int WIDTH = 50;
    const int HEIGHT = 25;
    const int SPEED_MS = 100;
    public static bool[,] grid = new bool[WIDTH, HEIGHT];

    static void Main()
    {
        InitializeGrid();

        while (true)
        {
            Console.Clear();
            DisplayGrid();
            UpdateGrid();
            Thread.Sleep(SPEED_MS);
        }
    }

    static void InitializeGrid()
    {
        Random random = new();

        for (int y = 0; y < HEIGHT; y++)
        {
            for (int x = 0; x < WIDTH; x++) grid[x, y] = random.Next(2) == 0;
        }
    }

    static void DisplayGrid()
    {
        for (int y = 0; y < HEIGHT; y++)
        {
            for (int x = 0; x < WIDTH; x++) Console.Write(grid[x, y] ? 'O' : ' ');
            Console.WriteLine();
        }
    }

    static void UpdateGrid()
    {
        int width = WIDTH;
        int height = HEIGHT;

        bool[,] newGrid = new bool[width, height];

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                int neighbors = CountAliveNeighbors(x, y);
                newGrid[x, y] = grid[x, y] ? neighbors == 2 || neighbors == 3 : neighbors == 3;
            }
        }
        Array.Copy(newGrid, grid, newGrid.Length);
    }

    static int CountAliveNeighbors(int x, int y)
    {
        int count = 0;

        for (int i = -1; i <= 1; i++)
        {
            for (int j = -1; j <= 1; j++)
            {
                int neighborX = x + i;
                int neighborY = y + j;

                if (neighborX >= 0 && neighborX < WIDTH && neighborY >= 0 && neighborY < HEIGHT && !(i == 0 && j == 0))
                    count += grid[neighborX, neighborY] ? 1 : 0;
            }
        }
        return count;
    }
}
