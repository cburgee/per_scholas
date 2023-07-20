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
//Game Board class setup
class GameBrain {
  constructor() {
    this.isGameOn = true
    this.questions = [...questions["results"]]
    this.currentQuestion = {}
    this.roster = []
    this.currentCorrectLetterAnswer = ""
  }

  //custom implementation of a random number within range
  #getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

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
        console.log(this.currentCorrectLetterAnswer)
        break
      case "1":
        this.currentCorrectLetterAnswer = "b"
        console.log(this.currentCorrectLetterAnswer)
        break
      case "2":
        this.currentCorrectLetterAnswer = "c"
        console.log(this.currentCorrectLetterAnswer)
        break

      case "3":
        this.currentCorrectLetterAnswer = "d"
        console.log(this.currentCorrectLetterAnswer)
        break
    }
    return randQuestion
  }
  // SHOULDNT BE HERE, WRONG CLASS!!!!!
  // Displays this.currentQuestion
  displayQuestion() {
    const curQuestion = this.currentQuestion
    const questions = document.querySelectorAll("li")
    let question = document.querySelector("p")
    question.textContent = curQuestion.question
    for (let i = 0; i < questions.length; i++) {
      console.log(questions[i].textContent)
      questions[i].textContent = curQuestion.answerChoices[i]
      console.log(questions[i].textContent)
    }
    console.log(curQuestion.question)
    console.log(`
    A) ${curQuestion.answerChoices[0]}\n
    B) ${curQuestion.answerChoices[1]}\n
    C) ${curQuestion.answerChoices[2]}\n
    D) ${curQuestion.answerChoices[3]}\n
    `)
  }

  // Checks to see if the supplied player's answer is correct
  checkAnswer(player) {
    if (
      player.currentAnswer.toLowerCase() === this.currentCorrectLetterAnswer
    ) {
      player.incrementTotalQuestionsAnswered()
      player.incrementCorrectQuestions()
    } else {
      player.incrementTotalQuestionsAnswered()
    }
  }

  // Sets the current winner as the individual with the least score
  getWinner() {
    for (let curPlayer of this.roster + 1) {
      console.log(curPlayer.finalScore)
      let curWinner = this.roster[0]
      if (curPlayer.finalScore <= curWinner.finalScore) {
        curWinner = curPlayer
      }
      return curWinner
    }
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

// Instantiation of "GameBrain"
const gameBrain = new GameBrain()
// Declare number of players for the game and then have the gamebrain create a corresponding amount of players
const numberOfPlayers = 2
gameBrain.createRoster(numberOfPlayers)

// Main game loop----------------------------------------------------------------------------------------------------------------------
// First while used to restart multiple games
while (gameBrain.isGameOn === true) {
  // for loop to loop through each registered player in the roster
  for (let i = 0; i < gameBrain.roster.length; i++) {
    const curPlayer = gameBrain.roster[i]
    // while the player has not answered 5 questions correctly, keep asking questions. (remember the point of the game is to answer 5 correctly in the least amount of questions possible)
    while (curPlayer.totalQuestionsAnswered <= 1) {
      gameBrain.getNextQuestion()
      gameBrain.displayQuestion()
      curPlayer.setPlayerAnswer()
      gameBrain.checkAnswer(curPlayer)
    }
    curPlayer.finalScore = curPlayer.totalQuestionsAnswered
  }
  gameBrain.isGameOn = false
  console.log(
    `%c The winner is: ${gameBrain.getWinner().name}!`,
    "color: #5258FF; font-size: 25px"
  )
  console.log("Would you like to play again? y/n")
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
