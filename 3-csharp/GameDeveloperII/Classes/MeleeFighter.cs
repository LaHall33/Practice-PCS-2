using System.Collections.Generic;

namespace GameDeveloperII.Classes
{
    public class MeleeFighter : Enemy
    {
        // Constructor to initialize MeleeFighter with default Health and specific attacks
        public string 

        public MeleeFighter(string name)
            : base(name, 120, new List<Attack>
            {
                new Attack("Punch", 20),
                new Attack("Kick", 15),
                new Attack("Tackle", 25)
            })
        {
        }

        // Rage method - performs a random attack with extra damage
        public void Rage()
        {

            // Create a Random object
            Random random = new Random();

            // Select a random index
            int index = random.Next(AttackList.Count);

            // Get the attack at the random index
            var attack = AttackList[index];

            // Increase damage amount by 10
            int increasedDamage = attack.DamageAmount + 10;

            // Print out the result of the attack with increased damage
            Console.WriteLine($"{Name} performs {attack.Name} in Rage, dealing {increasedDamage} damage!");
        }
    }
}
