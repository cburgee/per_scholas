/*
A
1) const var = 12;
2) var = 14;
3) var = let newVar;
4) Declare is creating a new varabie. Assigning is adding a value to a variable. Defining is both at the same time: creation and assignment.
6) Pseudocoding is going through the logic of code without writing any actual code down. A brainstrom of sorts.
7) 85% should be spent thinking.
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

// H-----------------------------------------------------------------------------------------------------------------
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
]

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
]

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
kristynsCloset.splice(-1, 0, "raybans")
kristynsCloset.splice(-3, 1, "stained knit hat")
console.log(
  `Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}`
)
thomsCloset[1].splice(-1, 1, "Footie Pajamas")
console.log(thomsCloset)

// FUNCTIONS!!!------------------------------------------------------------------------------------------------------------

// B. printCool------------------------------------------------------------------------------------------------------------
function printCool(name) {
  if (typeof name === "string") {
    console.log(`${name} is super coolio!`)
  } else {
    console.log("Argument must be of type 'string'.")
  }
}
printCool("Caleb")

// C. calculateCube------------------------------------------------------------------------------------------------------------
function calculateCube(num) {
  if (typeof num === "number") {
    return Math.pow(num, 3)
  } else {
    console.log("Argument must be of type 'number'.")
  }
}
console.log(calculateCube(5))

// D. isVowel------------------------------------------------------------------------------------------------------------

function isVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u"]
  if (typeof letter === "string") {
    for (i of vowels) {
      if (i === letter) {
        return true
      }
    }
    return false
  } else {
    console.log("Argument must be of type 'string'.")
  }
}
console.log(isVowel("z"))

// E. getTwoLengths------------------------------------------------------------------------------------------------------------
function getTwoLengths(str1, str2) {
  return [str1.length, str2.length]
}

console.log(getTwoLengths("Hank", "Hippopottamus"))

// F. getMultipleLengths------------------------------------------------------------------------------------------------------------
function getMultipleLengths(arrOfStrings) {
  let result = []
  for (i of arrOfStrings) {
    result.push(i.length)
  }
  return result
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

// G. maxOfThree------------------------------------------------------------------------------------------------------------
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

console.log(maxOfThree(6, 9, 1))

// H. printLongestWord------------------------------------------------------------------------------------------------------------
function printLongestWord(arrOfStrings) {
  let longestWord = ""
  for (let i = 0; i < arrOfStrings.length; i++) {
    if (arrOfStrings[i].length > longestWord.length) {
      longestWord = arrOfStrings[i]
    }
  }
  return longestWord
}

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
)

// OBJECTS!!!!------------------------------------------------------------------------------------------------------------
// A------------------------------------------------------------------------------------------------------------
const user = {
  name: "Caleb",
  email: "caleb.burge@gmail.com",
  age: 12,
  purchased: [],
}

// B------------------------------------------------------------------------------------------------------------
const otherUsr = { ...user }
otherUsr.email = "newemail@gmail.com"
otherUsr.age++

// C------------------------------------------------------------------------------------------------------------
otherUsr.location = "a location"
console.log(otherUsr)

// D------------------------------------------------------------------------------------------------------------
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])

// E------------------------------------------------------------------------------------------------------------
user.friend = {
  name: "friend",
  age: 17,
  location: "friend location",
  purchased: [],
}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
console.log(user.friend.purchased[1])

// F------------------------------------------------------------------------------------------------------------
for (item of user.purchased) {
  console.log(item)
}
for (item of user.friend.purchased) {
  console.log(item)
}

// G------------------------------------------------------------------------------------------------------------
function updateUser() {
  user.age++
  user.name = user.name.toUpperCase()
}
console.log(user)

function oldAndLoud(person) {
  person.age++
  person.name = person.name.toUpperCase()
}
oldAndLoud(user)
console.log(user)
