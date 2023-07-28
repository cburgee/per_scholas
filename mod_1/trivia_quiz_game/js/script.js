// import questions variable from seperate folder so things are a little easier to keep track of.
import questions from "./questions.js"
//Player class setup
class Player {
  constructor(name) {
    this.name = name
    this.totalQuestionsAnswered = 0
    this.correctQuestions = 0
    this.currentAnswer = ""
    this.finalScore = 0
  }

  // Increase the total amount of questions answered by 1
  incrementTotalQuestionsAnswered() {
    this.totalQuestionsAnswered++
  }

  // Increases the amount of correct questions answered by 1
  incrementCorrectQuestions() {
    this.correctQuestions++
  }
  //Going to change how we get the player answer later.
  setPlayerAnswer() {
    this.currentAnswer = String(prompt("Your answer:")).toLowerCase()
  }
}
//Game Brain class setup
class GameBrain {
  constructor() {
    this.isGameOn = false
    this.questions = [...questions["results"]]
    this.currentQuestion = {}
    this.roster = []
    this.currentCorrectLetterAnswer = ""
  }

  //custom implementation of a random number within range
  #getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Get a random question from questionsList
  // Add a property answerChoices of all the answer choices, with the correct answer being in a random position
  // Assign a letter value to the corresponding correct answer position.
  getNextQuestion() {
    // get a random question from the questions list
    const randQuestion =
      this.questions[this.#getRandomNumberInRange(0, this.questions.length - 1)]
    let incorrectAnswers = randQuestion.incorrect_answers
    let correctAnswer = randQuestion.correct_answer
    let tmpList = [...incorrectAnswers]
    // Add the correct answer into a different answer choice each time, instead of always the same answer choice
    let randIndex = Math.floor(Math.random() * tmpList.length + 1)
    randQuestion.answerChoices = [...tmpList]
    randQuestion.answerChoices.splice(randIndex, 0, correctAnswer)
    this.currentQuestion = randQuestion
    //Takes the correct answer of the question and assigns it to a letter value so it can be used for comparison later.
    switch (String(randQuestion.answerChoices.indexOf(correctAnswer))) {
      case "0":
        this.currentCorrectLetterAnswer = "a"
        break
      case "1":
        this.currentCorrectLetterAnswer = "b"
        break
      case "2":
        this.currentCorrectLetterAnswer = "c"
        break
      case "3":
        this.currentCorrectLetterAnswer = "d"
        break
    }
    return randQuestion
  }
  // Displays the current question, to the console.
  displayQuestion() {
    const curQuestion = this.currentQuestion
    console.log(
      `%c ${curQuestion.question}`,
      "color: cornflowerblue; font-size: 14px"
    )
    console.log(
      `%c
    A) ${curQuestion.answerChoices[0]}\n
    B) ${curQuestion.answerChoices[1]}\n
    C) ${curQuestion.answerChoices[2]}\n
    D) ${curQuestion.answerChoices[3]}\n
    `,
      "color: lightgray; font-size: 12px"
    )
  }

  // Checks to see if the supplied player's answer is correct
  checkAnswer(player) {
    if (
      player.currentAnswer.toLowerCase() === this.currentCorrectLetterAnswer
    ) {
      player.incrementTotalQuestionsAnswered()
      player.incrementCorrectQuestions()
      console.log(
        `%c Correct! (${player.correctQuestions}/1)`,
        "color: green; font-size: 12px"
      )
    } else {
      console.log(
        `%c Incorrect! (${player.correctQuestions}/1)`,
        "color: red; font-size: 12px"
      )
      player.incrementTotalQuestionsAnswered()
    }
  }

  // Sets the current winner as the individual with the least score and also displays them to the DOM
  getWinner() {
    let div = document.querySelector("div")
    let curWinner = this.roster[0]
    for (let curPlayer of this.roster) {
      if (curPlayer.finalScore <= curWinner.finalScore) {
        curWinner = curPlayer
      }
    }
    div.textContent = "Thank you for playing my Trivia Quiz Game!"
    return curWinner
  }

  // Takes an integer creates X amount of players and adds them to the roster
  createRoster(numOfPlayers) {
    for (let i = 1; i <= numOfPlayers; i++) {
      const newPlayer = new Player(`Player ${i}`)
      this.roster.push(newPlayer)
    }
    this.playersLeftToPlay = this.roster.length
  }

  resetGame() {
    for (let player of this.roster) {
      player.totalQuestionsAnswered = 0
      player.correctQuestions = 0
      player.currentAnswer = ""
      player.finalScore = 0
    }
  }
}
// Space to move game below prompt window
console.log("\n\n\n\n\n\n\n\n")
// Instantiation of "GameBrain"
const gameBrain = new GameBrain()
// Declare number of players for the game and then have the gamebrain create a corresponding amount of players
const numberOfPlayers = 2
gameBrain.createRoster(numberOfPlayers)
let doStartGame = String(prompt("Are you ready to play? y/n".toLowerCase()))
if (doStartGame === "y") {
  gameBrain.isGameOn = true
}
// Main game loop----------------------------------------------------------------------------------------------------------------------
// First while used to restart multiple games
while (gameBrain.isGameOn === true) {
  // for loop to loop through each registered player in the roster
  for (let i = 0; i < gameBrain.roster.length; i++) {
    const curPlayer = gameBrain.roster[i]
    console.log(
      `%c ${curPlayer.name} start!`,
      "color: lightgreen; font-size: 20px"
    )
    // while the player has not answered 5 questions correctly, keep asking questions. (remember the point of the game is to answer 5 correctly in the least amount of questions possible)
    while (curPlayer.correctQuestions < 1) {
      gameBrain.getNextQuestion()
      gameBrain.displayQuestion()
      curPlayer.setPlayerAnswer()
      gameBrain.checkAnswer(curPlayer)
    }
    curPlayer.finalScore = curPlayer.totalQuestionsAnswered
  }
  // Display winner to console.
  console.log(
    `%c The winner is: ${gameBrain.getWinner().name}`,
    "color: lightgreen; font-size: 20px"
  )
  console.log(
    `%c Would you like to play again? y/n`,
    "color: red; font-size: 24px"
  )
  // Ask the player if they would like to play again.
  let doReplay = String(
    prompt("Would you like to play again? y/n").toLowerCase()
  )
  // Ask the player if they want to play the game again
  if (doReplay === "y") {
    gameBrain.resetGame()
  } else {
    gameBrain.isGameOn = false
  }
}
