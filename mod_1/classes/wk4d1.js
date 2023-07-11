class Hamster {
  constructor(name) {
    this.owner = ""
    this.name = name
    this.price = 15
  }

  wheelRun() {
    console.log("squeak squeak")
  }
  eatFood() {
    console.log("nibble nibble")
  }
  get getPrice() {
    return this.price
  }
}

class Person {
  constructor(name) {
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamsters = []
    this.bankAccount = 0
    this.name = name
  }
  get getName() {
    return this.name
  }
  get getAge() {
    return this.age
  }
  get getWeight() {
    return this.weight
  }
  greet() {
    console.log(`Hello, ${this.getName}`)
  }
  eat() {
    this.weight++
    this.mood++
  }

  exercise() {
    this.weight--
  }
  ageUp() {
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount += 10
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster)
    this.mood += 10
    bankAccount -= hamster.getPrice
  }
}

const timmy = new Person(Timmy)
const gus = new Hamster(Gus)

for (let i = 0; i <= 4; i++) {
  timmy.ageUp()
  timmy.eat()
  timmy.exercise()
}
for (let i = 0; i <= 8; i++) {
  timmy.ageUp()
}
gus.owner = "Timmy"
timmy.buyHamster(gus)
for (let i = 0; i <= 14; i++) {
  timmy.ageUp()
}
for (let i = 0; i <= 1; i++) {
  timmy.eat()
  timmy.exercise()
}
