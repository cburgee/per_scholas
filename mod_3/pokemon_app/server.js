const Express = require("express")
const PORT = 3000
const HOSTNAME = "127.0.0.1"
const app = Express()
const pokemon = require("./models/pokemon")

app.get("/", function (req, res) {
  res.send("Welcome to the pokemon app!")
})

app.get("/pokemon", function (req, res) {
  res.send(pokemon)
})

app.listen(PORT, HOSTNAME, function () {
  console.log(`App running on port ${PORT}`)
})
