const userName = prompt("Enter your name to start the battle:");


let userHealth = 100;
let BichaelHealth = 100;


console.log(` ${userName} only has ${userHealth} health points left. Bichael has ${BichaelHealth} health points. FIGHT!`); 
    while (userHealth > 0 && BichaelHealth > 0) {

    const randomDamage = [0,1,2,3,4,5,6,7,8,9,10];
    const attackUser = randomDamage [Math.floor(Math.random() * randomDamage.length)];
    const attackBichael = randomDamage [Math.floor(Math.random() * randomDamage.length)];

    userHealth = userHealth - attackUser;
    BichaelHealth = BichaelHealth - attackBichael;

    if (userHealth > 0) {
        console.log(`${userName} has ${userHealth} health left.`);
            } else if (userHealth <= 0) {
        console.log(`Bichael defeated ${userName}!`);
        break;
        }
        if (BichaelHealth > 0) {
        console.log(`Bichael has ${BichaelHealth} health left.`);
            } else if (BichaelHealth <= 0) {
        console.log(`${userName} defeated Bichael!`);
        } 
    }
