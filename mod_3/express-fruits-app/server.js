const express = require("express")
const fruits = require("./models/fruits")
const app = express()
const PORT = 3000
const HOSTNAME = "127.0.0.1"

//Routes
app.get("/", function (req, res) {
  res.send("Home Page")
})

/**
 * @path /fruits
 * @method GET
 * @action index
 * @description returns a list of fruits
 */
app.get("/fruits", function (req, res) {
  res.send(fruits)
})

/**
 * @path /fruits/indexOfFruitArray
 * @param /:indexOfFruitArray
 * @method GET
 * @action show
 * @description return a single fruit
 */
app.get("/fruits/:indexOfFruitsArray", function (req, res) {
  const index = req.params.indexOfFruitsArray
  const item = fruits[index]
  res.send(item)
})

app.listen(PORT, HOSTNAME, function () {
  console.log(`Server (http://${HOSTNAME}) is starting on port ${PORT}`)
})
