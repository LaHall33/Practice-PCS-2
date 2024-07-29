using System.Diagnostics.Contracts;
using System.Reflection.Metadata.Ecma335;
using GameDeveloperII2.Classes;

namespace GameDeveloperII2.Classes;

public class RangedFighter : Enemy
{
    public int distance;

    public int Distance { get; set; }
    private const int DashDistance = 15;                // Distance added by Dash

    public RangedFighter(string name) : base(name)
    {
        Health = 100;
        Distance = 5;
        AttackList = new List<Attack>
        {
            new Attack("Shoot an Arrow", 20),
            new Attack("Throw a knife", 15),
        };
    }

    public RangedFighter(string name, int health, List<Attack> attackList) : base(name, health, attackList)
    {
        Distance = distance;
    }

    public void Dash()
    {
        Distance += DashDistance;
        Console.WriteLine($"{Name} increased distance to {Distance}");

    }
    public override string RandomAttack()
    {
        if (Distance < 10)
        {
            return $"{Name} distance is {Distance} and is too close to attack. Distance must be at least 10.";

        }
        Random random = new Random();
        var randomAttack = AttackList[random.Next(AttackList.Count)];

        return $"{Name} attacks with {randomAttack.Name}, causing {randomAttack.DamageAmount} points in damage.";
    }
}

