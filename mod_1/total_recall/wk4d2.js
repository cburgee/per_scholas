/*
A
1) const var = 12;
2) var = 14;
3) var = let newVar;
4) declare is creating a new varabie. Assigning is adding a value to a variable. Defining is usually in reference to creating functions.
6) pseudocoding is going through the logic of code without writing any actual code down. A brainstrom of sorts.
7) 80% should be spent thinking.
*/

// B----------------------------------------------------------------------------------------------------------------
let firstVariable = "Hello World"
firstVariable = 12
let secondVariable = firstVariable
secondVariable = "string"
console.log(firstVariable)
let yourName = "Caleb Burge"
console.log(`Hello, my name is ${yourName}`)

// C----------------------------------------------------------------------------------------------------------------
const a = 4
const b = 53
const c = 57
const d = 16
const e = "Kevin"

console.log(a !== b)
console.log(c !== d)
console.log("Name" === "Name")
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false)
console.log(false && false && false && false && false && true)
console.log(false && false)
console.log(e === "Kevin")
console.log(a + b === c) // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d) // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== "48")

// D-----------------------------------------------------------------------------------------------------------------

const animal = "cow"
if (animal !== "cow") {
  console.log("Hey! You're not a cow!")
}

// E-----------------------------------------------------------------------------------------------------------------
let personAge
if (personAge < 16) {
  console.log("Sorry, you're too young.")
} else {
  console.log("Here are the keys!")
}

// FOR LOOPS---------------------------------------------------------------------------------------------------------
// A-----------------------------------------------------------------------------------------------------------------
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
for (let i = 10; i <= 400; i++) {
  console.log(i)
}
for (let i = 12; i <= 4000; i += 3) {
  console.log(i)
}

// B-----------------------------------------------------------------------------------------------------------------
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number!`)
  }
}

// C-----------------------------------------------------------------------------------------------------------------
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`I found a ${i}. High five! I found a ${i}. Three is a crowd!`)
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`)
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd!`)
  }
}

// D-----------------------------------------------------------------------------------------------------------------
let bank_account = 0
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2
}
console.log(bank_account)

// ARRAYS & CONTROL FLOWS--------------------------------------------------------------------------------------------

// 1) Array Indeces
// 2) no
// 3) virtually any container. A box, a drawer, etc.

// B-----------------------------------------------------------------------------------------------------------------
const qoutes = ["quote1", "quote2", "quote3"]

// C-----------------------------------------------------------------------------------------------------------------
const randomThings = [1, 10, "Hello", true]
randomThings.splice(2, 1, "World")
console.log(randomThings[2])

// D-----------------------------------------------------------------------------------------------------------------
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2])
ourClass.splice(4, 1, "Octocat")
ourClass.push("Cloud City")
console.log(ourClass)

// E-----------------------------------------------------------------------------------------------------------------
const myArray = [5, 10, 500, 20]
myArray.push("Aegon")
myArray.push("myStr")
myArray.shift()
myArray.unshift("Bob Marley")
myArray.pop()
myArray.reverse()
console.log(myArray)

// F-----------------------------------------------------------------------------------------------------------------
let newInt = 1
if (newInt < 100) {
  console.log("little number")
} else {
  console.log("big number")
}

// G-----------------------------------------------------------------------------------------------------------------
if (newInt < 5) {
  console.log("little number")
} else if (newInt > 10) {
  console.log("big number")
} else {
  console.log("monkey")
}
