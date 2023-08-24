const express = require("express")
const app = express()
const PORT = 3000
const HOSTNAME = "127.0.0.1"

app.get("/", function (req, res) {
  res.send("Home Page")
})

app.get("/tip/:total/:tipPercentage", function (req, res) {
  const { total, tipPercentage } = req.params
  const calculatedTotal = total * (tipPercentage / 100)
  res.send(
    `You should tip a total of ${calculatedTotal}. With a bill of ${total} and a tip percentage of ${tipPercentage}`
  )
})

app.get("/magic/:question", function (req, res) {
  const eightBallResponses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ]
  const question = req.params.question
  const randomNum = Math.floor(Math.random() * eightBallResponses.length)
  const randomResponse = eightBallResponses[randomNum]
  res.send(`<h3>${question}?</h3>\n<h1>${randomResponse}</h1>`)
})

app.get("/greeting/:name", function (req, res) {
  const name = req.params.name
  res.send(`Hello, ${name}`)
})

app.listen(PORT, HOSTNAME, function () {
  console.log("Server is starting!")
})
