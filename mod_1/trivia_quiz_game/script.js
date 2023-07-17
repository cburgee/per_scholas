// Player 1 is asked first question.
// Player 1 is prompted with question
// Player 1 answer (a, b, c, or d) to the question
// If correct, add 1 to correctAnswers. If not, do nothing.
// Repeat steps 1-4 until correctAnswers reaches 10.
// Record how many questions were answered before the player got 10 correct.
// Repeat Steps 1-6 for player 2
// Compare final score for both players, lower score wins the round.
// Plays best 2 out of 3
// import questions variable from seperate folder so things are a little easier to keep track of.
import questions from "./questions.js"

const questionsCopy = [...questions["results"]]
console.log(questionsCopy)
//Player class setup
class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }
}
//Game Board class setup
class Game {
  constructor(setOfQuestions) {
    this.isGameOn = true
    this.questions = setOfQuestions
    this.rightAnswers = 0
  }

  //custom implementation of a random number within range
  #getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  //Grabs a single question out of the questions list copy
  #getNextQuestion() {
    const randNum = this.#getRandomNumberInRange(0, questionsCopy.length)
    return this.questions[randNum]
  }

  //This is going to change
  nextQuestion() {
    const question = this.#getNextQuestion()
    console.log(`
    question: ${question.question}\n
    incorrect_answers: ${question.incorrect_answers}\n
    correct_answer: ${question.correct_answer}
    `)
  }
}
const gameBrain = new Game(questionsCopy)
const player1 = new Player("Caleb")

while (gameBrain.isGameOn === true && gameBrain.rightAnswers <= 10) {
  gameBrain.nextQuestion()
  console.log("loop ran")
  gameBrain.isGameOn = false
}
