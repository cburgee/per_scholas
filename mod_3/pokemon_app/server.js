const Express = require("express")
const PORT = 3000
const HOSTNAME = "127.0.0.1"
const app = Express()
const pokemonFromFile = require("./models/pokemon")
const jsxEngine = require("jsx-view-engine")
const pokemon = require("./models/pokemon")

app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

app.use(Express.urlencoded({ extended: false }))
app.use(Express.json())

app.get("/", function (req, res) {
  res.send("Welcome to the pokemon app!")
})

app.get("/pokemon", function (req, res) {
  res.render("Index", { pokemon: pokemonFromFile })
})

app.get("/pokemon/new", function (req, res) {
  res.render("New")
})

app.post("/pokemon", function (req, res) {
  const newItem = {
    name: req.body.name,
    img: req.body.img,
  }
  pokemon.push(newItem)
  res.redirect("/pokemon")
})

app.get("/pokemon/:variable", function (req, res) {
  const pokemon = pokemonFromFile[req.params.variable]
  res.render("Show", { pokemon })
})

app.listen(PORT, HOSTNAME, function () {
  console.log(`App running on port ${PORT}`)
})
