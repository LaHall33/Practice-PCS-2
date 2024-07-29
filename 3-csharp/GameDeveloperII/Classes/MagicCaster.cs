using System.Collections.Generic;
/*
namespace GameDeveloperII.Classes
{
    public class MagicCaster : Enemy
    {
        // Constructor to initialize MagicCaster with default Health and specific attacks
        public MagicCaster(string name)
            : base(name, 80, new List<Attack>
            {
                new Attack("Fireball", 25),
                new Attack("Lightning Bolt", 20),
                new Attack("Staff Strike", 10)
            })
        {
        }

        // Heal method - heals a target enemy
        public void Heal(Enemy target)
        {
            if (target == null)
            {
                Console.WriteLine($"{Name} cannot heal a null target.");
                return;
            }

            target.Health += 40;

            // Ensure that health does not exceed a reasonable value
            // Assuming a max health limit of 100 for simplicity
            if (target.Health > 100)
            {
                target.Health = 100;
            }

            // Print out the result of the healing
            Console.WriteLine($"{Name} heals {target.Name} for 40 health. {target.Name}'s health is now {target.Health}.");
        }
    }
}
*/