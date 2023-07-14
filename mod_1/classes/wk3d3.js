// class Governer {
//   static tallHat = true
//   static greet() {
//     console.log("The Governer Greets you!")
//   }
//   static hatStatus() {
//     if (this.tallHat === true) {
//       console.log(
//         "The Governer, in a stereotypical fashion, is wearing a top hat."
//       )
//     } else {
//       console.log("The Governer is not wearing a top hat.")
//     }
//   }
// }
// Governer.greet()
// Governer.hatStatus()

// -----------------------------------------------------------------------------------------------------

class Person {
  constructor(name, age, weight) {
    this.name = name
    this.age = age
    this.weight = weight
  }

  sayName() {
    console.log("My name is " + this.name)
  }
  eat() {
    this.weight++
  }
  happyBirthday() {
    console.log(`Happy Birthday ${this.name}! You just turned: ${this.age}`)
  }
}

class Chef extends Person {
  constructor(name, age, weight, profession) {
    super(name, age, weight)
    this.profession = profession
  }
}

class PostalWorker extends Person {
  constructor(name, age, weight, profession) {
    super(name, age, weight)
    this.profession = profession
  }
}

const chef1 = new Chef("Jerry", 45, 240, "Head Chef")
const chef2 = new Chef("Terry", 32, 176, "Sous Chef")
const postal1 = new PostalWorker("Mary", 24, 128, "Driver")
const postal2 = new PostalWorker("Jane", 24, 128, "Assistant Driver")
console.log(chef1)
console.log(chef2)
console.log(postal1)
console.log(postal2)
chef1.happyBirthday()
chef1.eat()
chef1.sayName()
chef2.happyBirthday()
chef2.eat()
chef2.sayName()
postal1.happyBirthday()
postal1.eat()
postal1.sayName()
postal2.happyBirthday()
postal2.eat()
postal2.sayName()
