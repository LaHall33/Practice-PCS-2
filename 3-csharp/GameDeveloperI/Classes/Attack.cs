namespace GameDeveloperI.Classes;

public class Attack
{
    public string Name { get; set; }
    public int DamageAmount { get; set; }

    public Attack(string name, int damageAmount)
    {
        Name = name;
        DamageAmount = damageAmount;
    }
    public virtual string DisplayDamage()
    {
        return $"Attack Name: {Name}, Damage Amount: {DamageAmount}";
    }
}