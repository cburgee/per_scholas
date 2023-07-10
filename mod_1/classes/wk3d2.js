// class Cat {
//   constructor(name, color, weight, sex) {
//     this.name = name
//     this.color = color
//     this.weight = weight
//     this.sex = sex
//     this.getAttributes()
//     this.meow()
//   }

//   meow() {
//     console.log(`${this.name} *meows*`)
//   }
//   set setName(newName) {
//     this.name = newName
//   }
//   getAttributes() {
//     const maleMsg = `This cat's name is: ${this.name}. His color is: ${this.color}, he wieghs: ${this.weight}lbs. and is male.`
//     const femaleMsg = `This cat's name is: ${this.name}. Her color is: ${this.color}, she wieghs: ${this.weight}lbs. and is female.`
//     if (this.#checkSex() === 1) {
//       console.log(maleMsg)
//     } else {
//       console.log(femaleMsg)
//     }
//   }

//   #checkSex() {
//     if (this.sex.toLowerCase() === "male") {
//       return 1
//     } else {
//       return 0
//     }
//   }
// }

// const cat1 = new Cat("Max", "Orange", 10, "male")
// const cat2 = new Cat("Bella", "Black", 8, "female")
// const cat3 = new Cat("Milo", "Gray", 11, "male")
// cat1.setName = "Billy"
// cat2.setName = "Lily"
// cat3.setName = "Leo"
// console.log(cat1)
// console.log(cat2)
// console.log(cat3)

//---------------------------------------------------------------------------------------------------------------------

class Pirate {
  constructor(gold = 0, weapon = "sword", isWearingEyePatch = false) {
    this.gold = gold
    this.weapon = weapon
    this.isWearingEyePatch = isWearingEyePatch
  }

  putOnEyePatch() {
    this.isWearingEyePatch = true
  }

  takeOffEyePatch() {
    this.isWearingEyePatch = false
  }

  addGold(goldAmount) {
    this.gold += goldAmount
  }

  removeGold() {
    this.gold -= goldAmount
  }

  printAttributes() {
    console.log(`
    Gold: ${this.gold}
    Weapon: ${this.weapon}
    Is Eye Patch On: ${this.isWearingEyePatch}
    `)
  }
}

const jollyRodger = []
const blackPearl = []

for (let i = 0; i <= 2; i++) {
  jollyRodger.push(new Pirate(250, "axe", true))
  blackPearl.push(new Pirate(250, "spear"))
}

for (pirate of jollyRodger) {
  pirate.printAttributes()
}
