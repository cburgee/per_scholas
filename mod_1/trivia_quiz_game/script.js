// Player 1 is asked first question.
// Player 1 is prompted with question
// Player 1 answer (a, b, c, or d) to the question
// If correct, add 1 to correctAnswers. If not, do nothing.
// Repeat steps 1-4 until correctAnswers reaches 10.
// Record how many questions were answered before the player got 10 correct.
// Repeat Steps 1-6 for player 2
// Compare final score for both players, lower score wins the round.
// Plays best 2 out of 3
// ------------------------------------------------------------------------------------------------------------------
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
  }

  //custom implementation of a random number within range
  #getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  //Grabs a single question out of the questions list copy and adds a new property with all the answer choices in a single list for easier modification
  getNextQuestion() {
    const randQuestion =
      this.questions[this.#getRandomNumberInRange(0, this.questions.length)]
    let tmpList = [
      randQuestion.incorrect_answers[0],
      randQuestion.incorrect_answers[1],
      randQuestion.incorrect_answers[2],
    ]
    // Add the correct answer into a different answer choice each time, instead of always the same answer choice
    let randIndex = Math.floor(Math.random() * tmpList.length)
    randQuestion.answerChoices = tmpList
    randQuestion.answerChoices.splice(randIndex, 0, randQuestion.correct_answer)
    this.currentQuestion = randQuestion
    return randQuestion
  }
  // SHOULDNT BE HERE, WRONG CLASS!!!!!
  // Displays this.currentQuestion
  displayQuestion() {
    const curQuestion = this.currentQuestion
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
      player.currentAnswer === this.currentQuestion.correct_answer.toLowerCase()
    ) {
      player.incrementTotalQuestionsAnswered()
      player.incrementCorrectQuestions()
    } else {
      player.incrementTotalQuestionsAnswered()
    }
  }

  // Sets the current winner as the individual with the least score
  getWinner() {
    for (let curPlayer of this.roster) {
      let curWinner = this.roster[0]
      if (curPlayer.finalScore <= curWinner.finalScore) {
        curWinner = curPlayer
      }
      return curWinner
    }
  }

  // Takes an integer creates X amount of players and adds them to a list
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

while (gameBrain.isGameOn === true) {
  for (let curPlayer of gameBrain.roster) {
    while (curPlayer.totalQuestionsAnswered < 3) {
      gameBrain.getNextQuestion()
      gameBrain.displayQuestion()
      curPlayer.setPlayerAnswer()
      gameBrain.checkAnswer(curPlayer)
    }
    curPlayer.finalScore = curPlayer.totalQuestionsAnswered
  }
  console.log(
    `%c The winner is: ${gameBrain.getWinner().name}!`,
    "color: #5258FF; font-size: 25px"
  )
  console.log("Would you like to play again? y/n")
  let doReplay = String(
    prompt("Would you like to play again? y/n").toLowerCase()
  )
  if (doReplay === "y") {
    gameBrain.resetGame()
  } else {
    gameBrain.isGameOn = false
  }
}
