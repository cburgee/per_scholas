class Ship {
  constructor(
    hull = this.getRandomNumberInRange(3, 6),
    firepower = this.getRandomNumberInRange(2, 4),
    accuracy = this.getRandomNumberInRange(6, 8) / 10
  ) {
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
    this.alive = true
    this.name = ""
  }

  get getHull() {
    return this.hull
  }

  set setHull(newValue) {
    this.hull = newValue
  }

  get getAliveStatus() {
    return this.alive
  }

  get getFirepower() {
    return this.firepower
  }

  get getAccuracy() {
    return this.accuracy
  }

  //Set status to dead
  die() {
    this.alive = false
  }

  //Display relavant stats in a pretty fashion
  displayHull() {
    const aliveShipValue = `%c ${this.name} has ${this.getHull} hull remaining!`
    const aliveShipStyle = "color: #49F048"
    const deadShipValue = `%c ${this.name} is dead!`
    const deadShipStyle = "color: #D90000"
    if (this.hull === 0) {
      console.log(deadShipValue, deadShipStyle)
    } else {
      console.log(aliveShipValue, aliveShipStyle)
    }
  }

  //Get a random number within a range (Used in other calculations)
  getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //Check to see if specified ship hit an attack.
  accuracySkillCheck(ship) {
    if (Math.random() < ship.getAccuracy) {
      return true
    } else {
      return false
    }
  }
  //Attack another ship as well as log the action to the console.
  attack(attacker, defender) {
    const defenderHealthRemaining = defender.getHull - attacker.getFirepower
    if (this.accuracySkillCheck(attacker) === true) {
      defender.setHull = defenderHealthRemaining
      console.log(
        `${attacker.name} hits ${defender.name} for ${attacker.firepower} damage!`
      )
      if (defenderHealthRemaining <= 0) {
        defender.die()
        defender.setHull = 0
      }
    } else {
      console.log(`${attacker.name} missed!`)
    }
  }
}

class PlayerShip extends Ship {
  constructor(name) {
    super()
    this.hull = 20
    this.firepower = 5
    this.accuracy = 0.7
    this.name = "Ishimura"
  }
}
class AlienShip extends Ship {
  constructor() {
    super()
  }
}
//Instantiate Variables
const alienConvoy = []
let gameOver = false

//Create Player
const player = new PlayerShip()

//Create Aliens
for (let i = 0; i < 6; i++) {
  let newShip = new AlienShip()
  newShip.name = `Alien Ship #${i}`
  alienConvoy.push(newShip)
}

//Game logic starts here!!!!
console.log("Welcome to Space Battles!")
player.attack(player, alienConvoy[0])
alienConvoy[0].displayHull()

//Variable to make things look a bit cleaner in the game logic below. Simply simplifying the "prefix.""
let currentAlien = alienConvoy[curAlien]

//First loop to ensure game plays while the player is alive, or the game is not over.
while (player.getAliveStatus === true && gameOver === false) {
  // Second loop to loop through the entire alien convoy, no matter the size
  for (let curAlien = 0; curAlien < alienConvoy.length; curAlien++) {
    //Third loop for having the player and a singular alien ship from the convoy fight until one of them dies.
    //Checking to see if player and alien are both alive
    while (
      gameOver === false &&
      currentAlien.getAliveStatus === true &&
      player.getAliveStatus === true
    ) {
      currentAlien.attack(currentAlien, player)
      player.displayHull()
      let doContinue = String(
        prompt("Do you want to attack or retreat? type: attack or retreat")
      ).toLowerCase()
      if (doContinue === "attack" && player.getAliveStatus !== false) {
        player.attack(player, currentAlien)
        currentAlien.displayHull()
      } else if (doContinue === "retreat") {
        gameOver = true
        console.log("Player retreated! May you live to fight on another day!")
      } else {
        gameOver = true
      }
    }
  }
  break
}
