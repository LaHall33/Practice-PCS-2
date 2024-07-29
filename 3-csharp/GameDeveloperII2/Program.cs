using GameDeveloperII2.Classes;

// 1.Create instances of the Melee, Ranged, and Magic Caster classes

var meleeFighter = new MeleeFighter("Zena the Warrior");
var rangedFighter = new RangedFighter("Jumanji");
var magicCaster = new MagicCaster("Harry Potter");

Console.WriteLine($"Players: {meleeFighter.Name}, {rangedFighter.Name}, and {magicCaster.Name}.");

// Create attacks
var punch = new Attack("Punch", 20);
var kick = new Attack("Kick", 15);
var tackle = new Attack("Tackle", 25);

var shootAnArrow = new Attack("Shoot an Arrow", 20);
var throwAKnife = new Attack("Throw a knife", 15);

var fireball = new Attack("Fireball", 25);
var lighteningBolt = new Attack("Lightening Bolt", 20);
var staffStrike = new Attack("Staff Strike", 10);


// Create attack lists
var meleeAttacks = new List<Attack> { punch, kick, tackle };
meleeFighter.AttackList = meleeAttacks;

var rangedAttacks = new List<Attack> { shootAnArrow, throwAKnife };
rangedFighter.AttackList = rangedAttacks;

var magicCasterAttacks = new List<Attack> { fireball, lighteningBolt, staffStrike };
magicCaster.AttackList = magicCasterAttacks;



// 2. Perform the Kick Attack from your Melee class character on your Ranged character

Console.WriteLine($"{rangedFighter.DisplayEnemyName()} health: {rangedFighter.Health}");

var kickAttack = meleeFighter.AttackList.Find(a => a.Name == "Kick");
if (kickAttack != null)
{
    meleeFighter.PerformAttack(rangedFighter, kickAttack);          // Perform the Kick attack from MeleeFighter on RangedFighter

    Console.WriteLine($"{rangedFighter.DisplayEnemyName()} health after Kick attack: {rangedFighter.Health}");
}

var random = new Random();



// 3. Perform the Rage method from your Melee class character on your Magic Caster character

Console.WriteLine($"{magicCaster.DisplayEnemyName()} health: {magicCaster.Health}");

meleeFighter.Rage();
var randomAttack1 = meleeFighter.AttackList[random.Next(meleeFighter.AttackList.Count)];


// 4. Perform the Shoot an Arrow Attack from your Ranged character on your Melee character (if you wrote everything as listed 
// above, you should not have been able to attack due to the Distance constraint)

Console.WriteLine($"{rangedFighter.DisplayEnemyName()} distance: {rangedFighter.Distance}");

var shootArrowAttack = rangedFighter.AttackList.Find(a => a.Name == "Shoot an Arrow");

if (shootArrowAttack != null && rangedFighter.Distance >= 10)
{
    rangedFighter.PerformAttack(meleeFighter, shootArrowAttack);

    Console.WriteLine($"{meleeFighter.DisplayEnemyName()} health after Shoot an Arrow attack: {meleeFighter.Health}");
}
else
{
    Console.WriteLine($"{rangedFighter.DisplayEnemyName()} cannot perform the attack due to distance constraint.");
}

// 5. Have your Ranged character perform the Dash method

rangedFighter.Dash();

// 6. Perform another Shoot an Arrow Attack from your Ranged character (this one should have worked now if everything is set up properly)

var shootArrowAttack2 = rangedFighter.AttackList.Find(a => a.Name == "Shoot an Arrow");

if (shootArrowAttack2 != null && rangedFighter.Distance >= 10)
{
    rangedFighter.PerformAttack(meleeFighter, shootArrowAttack2);

    Console.WriteLine($"{meleeFighter.DisplayEnemyName()} health after Shoot an Arrow attack: {meleeFighter.Health}");
}
else
{
    Console.WriteLine($"{rangedFighter.DisplayEnemyName()} cannot perform the attack due to distance constraint.");
}

// 7. Perform a Fireball Attack from your Magic Caster on your Melee character

Console.WriteLine($"{meleeFighter.DisplayEnemyName()} health: {meleeFighter.Health}");
var fireballAttack = magicCaster.AttackList.Find(a => a.Name == "Fireball");
if (fireballAttack != null)
{
    magicCaster.PerformAttack(meleeFighter, fireballAttack);

    Console.WriteLine($"{meleeFighter.DisplayEnemyName()} health after Fireball attack: {meleeFighter.Health}");
}


// 8. Have the Magic Caster perform the Heal method on the Ranged character

Console.WriteLine($"{rangedFighter.DisplayEnemyName()} health: {rangedFighter.Health}");
magicCaster.Heal(rangedFighter);

// 9. Have the Magic Caster perform the Heal method on themselves

Console.WriteLine($"{magicCaster.DisplayEnemyName()} health: {magicCaster.Health}");
magicCaster.Heal(magicCaster);
