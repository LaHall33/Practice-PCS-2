using GameDeveloperI.Classes;

// Create attacks
var fireball = new Attack("Fireball", 20);
var punch = new Attack("Punch", 5);
var throwAttack = new Attack("Throw", 15);

// Create attack list
var attacks = new List<Attack> { fireball, punch, throwAttack };

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





