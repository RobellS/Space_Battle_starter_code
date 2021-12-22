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
class collectorShip extends Ship {
  constructor(hull, firepower, accuracy) {
    super(hull, firepower, accuracy);
  }
}
let collectorArr = [];
let ussNormandy = new Ship(20, 5, 0.7);

for (let numofShip = 0; numofShip < 6; numofShip++) {
  let collector = new collectorShip(
    Math.floor(Math.random() * 4) + 3,
    Math.floor(Math.random() * 3) + 2,
    Math.random() * (0.8 - 0.6) + 0.6
  );
  collectorArr.push(collector);
}
// enemy's hull= Math.floor(Math.random() * 4) + 3,
// enemy's firepower = Math.floor(Math.random() * 3) + 2,
// enemy's accuracy = Math.random() * (0.8 - 0.6) + 0.6

let i = 0;
const attackRetreat = prompt(
  `Attacking Ship #${i + 1} or retreating? [Respond attack/retreat]`
);

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
    } else if (attackRetreat.toLowerCase() == "retreat") {
      alert("You have escaped.");
      return;
    } else {
      alert("Wrong input. Reload and try again.");
      return;
    }
  }
}

game();
console.log(ussNormandy.hull);
console.log(collectorArr);
