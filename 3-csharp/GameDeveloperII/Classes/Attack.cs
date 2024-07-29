namespace GameDeveloperII.Classes;

public class Attack
{
    public string Name { get; set; }
    public int DamageAmount { get; set; }
    public Enemy Target { get; set; }

    public Attack(string name, int damageAmount, string target)
    {
        Name = name;
        DamageAmount = damageAmount;
        Target = target;
    }
    public virtual string DisplayDamage()
    {
        return $"Attack Name: {Name}, Damage Amount: {DamageAmount}";
    }
}