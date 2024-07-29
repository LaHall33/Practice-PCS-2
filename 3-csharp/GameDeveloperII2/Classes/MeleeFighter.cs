using GameDeveloperII2.Classes;

namespace GameDeveloperII2.Classes;

public class MeleeFighter : Enemy
{
    public MeleeFighter(string name) : base(name)
    {
        Health = 120;

        AttackList = new List<Attack>
        {
            new Attack("Punch", 20),
            new Attack("Kick", 15),
            new Attack("Tackle", 25)
        };
    }

    public MeleeFighter(string name, int health, List<Attack> attackList) : base(name, health, attackList)
    {
        AttackList = attackList;
    }

    public void Rage()
    {
        Random random = new Random();
        var randomAttack = AttackList[random.Next(AttackList.Count)];

        int extraDamage = 10;
        int totalDamage = randomAttack.DamageAmount + extraDamage;

        Console.WriteLine($"{Name} performs a Rage attack with {randomAttack.Name}, causing {totalDamage} total damage.");
    }
}

