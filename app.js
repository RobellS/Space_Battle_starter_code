// Creating ship class to reference later on in code.
class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.attack = function (ship) {
      let hitchance = Math.random();
      if (this.accuracy > hitchance) {
        ship.hull -= this.firepower;
        return alert("You hit your target!");
      } else {
        return alert("You missed target...");
      }
    };
  }
}
//Created a child class for the enemy ship.
class collectorShip extends Ship {
  constructor(hull, firepower, accuracy) {
    super(hull, firepower, accuracy);
  }
}


let ussNormandy = new Ship(20, 5, 0.7); // Player's hull = 20; Player's firepower = 5; Player's accuracy = 70%
let collectorArr = []; // Declar & Init an empty array to .push enemy ship objects into while creating in the loop.
for (let numofShip = 0; numofShip < 6; numofShip++) {
  let collector = new collectorShip(
    Math.floor(Math.random() * 4) + 3,
    Math.floor(Math.random() * 3) + 2,
    Math.random() * (0.8 - 0.6) + 0.6
  );
  collectorArr.push(collector);
}
// Enemy's hull = Math.floor(Math.random() * 4) + 3,
// Enemy's firepower = Math.floor(Math.random() * 3) + 2,
// Enemy's accuracy = Math.random() * (0.8 - 0.6) + 0.6

let i = 0;
const attackRetreat = prompt(
  `Attacking Ship #${i + 1} or retreating? [Respond attack/retreat]`
);
// creating a function that simulates battle with prompts for player to make decisions (i.e Attack/Retreat)
function game() {
  while (i < 6) {
    if (attackRetreat.toLowerCase() == "attack") {
      ussNormandy.attack(collectorArr[i]);
      collectorArr[i].attack(ussNormandy);
      if (ussNormandy.hull <= 0) {
        return alert("You Lose...");
      } else if (collectorArr[i].hull <= 0) {
        collectorArr.shift();
        i++;
        alert(prompt(
            `Attacking Ship #${i + 1} or retreating? [Respond attack/retreat]`
          ));
        console.log(collectorArr);
      } else {
        alert("On to the next round...");
      }
    }
    //End of the attack and the start of the retreat conditional. 
    else if (attackRetreat.toLowerCase() == "retreat") {
      alert("You have escaped.");
      return;
    } else {
      alert("Wrong input. Reload and try again.");
      return;
    }
  } //while loop ends here
} // function ends here

game();// calling function that simulates battle to run the game.
console.log(ussNormandy.hull);// Checking the Player health at the end of the simulation.
console.log(collectorArr);// checking how many objects are left in the array (Should be zero).
