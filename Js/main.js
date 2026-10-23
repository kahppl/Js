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

fireballpower = 150


for (let fireballpower = 150;fireballpower -= 150 * 0.20;) {
    console.log(`Применение заклинания... Текущая сила: ${fireballpower}`)

  if (fireballpower <= 100) {
    console.log("Заклинание сбалансировано")
    break
  }
}

let strength = 10;
const maxStrength = 25;

for (;;) {
  
    const randomValue = Math.floor(Math.random() * 5) + 1;
    strength += randomValue;
    if (strength > maxStrength) {
        strength = maxStrength;
    }
    
    console.log(`Текущее значение силы: ${strength}`);
    
    if (strength === maxStrength) {
        break; 
    }
}



const sunduki = [12, 5, 8, 15, 3, 10];

let arr = 0;

for (let i = 0; i < sunduki.length; i++) {
  arr = arr + sunduki[i];
}

console.log(arr); 



const lovushki = [0, 0, 0, 0, 0, 0]; 
for (let i = 1; i < lovushki.length; i += 2) {
  lovushki[i] = "ловуша"; }

console.log(lovushki);