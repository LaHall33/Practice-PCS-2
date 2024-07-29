using GameDeveloperII.Classes;

// Create attacks
var fireball = new Attack("Fireball", 20);
var punch = new Attack("Punch", 5);
var throwAttack = new Attack("Throw", 15);

// Create instances of MeleeFighter, RangedFighter, and MagicCaster
var meleeFighter = new MeleeFighter("Warrior");
var rangedFighter = new RangedFighter("Archer");
var magicCaster = new MagicCaster("Mage");

// Create attack list
var attacks = new List<Attack> { fireball, punch, throwAttack };
var meleeAttacks = new List<Attack> {punch, kick, tackle};

// Create an Enemy
var bandit = new Enemy("Bandit", 100, attacks);
var boss = new Enemy("Boss", 100, attacks);
var guard = new Enemy("Guard", 100, attacks);

// Display information about the enemy and perform a random attack

// Bandit
Console.WriteLine(bandit.DisplayEnemyName());
Console.WriteLine(bandit.DisplayAttacks());
Console.WriteLine(bandit.RandomAttack());

// Boss
Console.WriteLine(boss.DisplayEnemyName());
Console.WriteLine(boss.DisplayAttacks());
Console.WriteLine(boss.RandomAttack());

// Guard
Console.WriteLine(guard.DisplayEnemyName());
Console.WriteLine(guard.DisplayAttacks());
Console.WriteLine(guard.RandomAttack());


// Perform an attack from enemy1 on enemy2
bandit.PerformAttack(boss, fireball);


// Perform the Kick Attack from MeleeFighter on RangedFighter
var kickAttack = meleeFighter.AttackList.Find(a => a.Name == "Kick");
meleeFighter.PerformAttack(rangedFighter, kickAttack);

// Perform the Rage method from MeleeFighter on MagicCaster
meleeFighter.Rage();
var randomAttack = meleeFighter.AttackList.Find(a => a.Name == "Punch"); // Choosing an attack to perform
magicCaster.PerformAttack(magicCaster, randomAttack); // This line is used to see the effects of Rage

// Perform the Shoot an Arrow Attack from RangedFighter on MeleeFighter
var shootArrowAttack = rangedFighter.AttackList.Find(a => a.Name == "Shoot an Arrow");
rangedFighter.PerformAttack(meleeFighter, shootArrowAttack); // This should not work due to Distance constraint

// Have RangedFighter perform the Dash method
rangedFighter.Dash();

// Perform another Shoot an Arrow Attack from RangedFighter (should work now)
rangedFighter.PerformAttack(meleeFighter, shootArrowAttack);

// Perform a Fireball Attack from MagicCaster on MeleeFighter
var fireballAttack = magicCaster.AttackList.Find(a => a.Name == "Fireball");
magicCaster.PerformAttack(meleeFighter, fireballAttack);

// Have MagicCaster perform the Heal method on RangedFighter
magicCaster.Heal(rangedFighter);

// Have MagicCaster perform the Heal method on themselves
magicCaster.Heal(magicCaster);