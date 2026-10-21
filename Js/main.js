playerName = "ewww"
health = 999
damage = 999
isHero = (true)

console.log (playerName)
console.log (health)
console.log (damage)
console.log ("Герой")

let diceroll = Math.floor(Math.random() * (20 - 1) + 1);
console.log(diceroll);

npcName = ("Старый Мудрец")
questItem = ("древний артефакт")
alert("Приветствую, "+ playerName + ". Я, " + npcName + ", поручаю тебе найти " + questItem )


basePower = 8
fireballpower = basePower * 3 
healPower = basePower + 15
invisibilityPower = basePower / 2
spels = [
  {fireballpower},
  {healPower},
  {invisibilityPower}
];
console.table(spels);


for (let i = 0; i < 10;i++ ) {
  
}

currentHealth = 15
maxHealth = 100

for (let currentHealth = 10; currentHealth < 101; currentHealth += 10) {
    console.log(currentHealth)
  if (currentHealth == 100) {
    console.log("Леченине всё")
    break
  }
}
