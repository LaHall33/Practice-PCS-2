using System.Collections.Generic;
/*
namespace GameDeveloperII.Classes
{
    public class RangedFighter : Enemy
    {
        public int Distance { get; set; }

        // Constructor to initialize RangedFighter with default Health, specific attacks, and Distance
        public RangedFighter(string name)
            : base(name, 100, new List<Attack>
            {
                new Attack("Shoot an Arrow", 20),
                new Attack("Throw a Knife", 15)
            })
        {
            Distance = 5; // Default Distance
        }

        // Dash method - sets Distance to 20
        public void Dash()
        {
            Distance = 20;
            Console.WriteLine($"{Name} dashes, setting Distance to {Distance}.");
        }

        // Override PerformAttack to check Distance
        public override void PerformAttack(Enemy target, Attack chosenAttack)
        {
            if (Distance < 10)
            {
                Console.WriteLine($"{Name} cannot perform an attack because Distance is less than 10.");
                return;
            }

            base.PerformAttack(target, chosenAttack);
        }
    }
}
*/