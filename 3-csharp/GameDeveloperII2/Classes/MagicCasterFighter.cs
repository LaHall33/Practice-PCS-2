namespace GameDeveloperII2.Classes;

public class MagicCaster : Enemy
{
    public MagicCaster(string name) : base(name)
    {
        Health = 80;
        AttackList = new List<Attack>
    {
        new Attack("Fireball", 25),
        new Attack("Lightenung Bolt", 20),
        new Attack("Staff Strike", 10)
    };
    }
    public MagicCaster(string name, int health, List<Attack> attackList) : base(name, health, attackList)
    {
        AttackList = attackList;
    }

    public void Heal(Enemy target)
    {
        target.Health += 40;

        if (target.Health > 100)
        {
            target.Health = 100;
        }

        Console.WriteLine($"{Name} heals {target.Name} and adds 40 health.");
        Console.WriteLine($"{target.Name}'s health is now {target.Health}.");
    }
}