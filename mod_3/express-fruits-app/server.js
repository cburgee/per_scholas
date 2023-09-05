const express = require("express")
const jsxEngine = require("jsx-view-engine")
require("dotenv").config()
const mongoose = require("mongoose")
const Fruit = require("./models/fruit")
const vegetables = require("./models/vegetables")
const app = express()
const PORT = 3000
const HOSTNAME = "127.0.0.1"

app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

app.use(function (req, res, next) {
  console.log(req.url, req.method)
  next()
})
app.use(express.urlencoded({ extended: false }))

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
app.get("/fruits", async function (req, res) {
  const fruitsFromDB = await Fruit.find({})
  res.render("fruits/Index", { fruits: fruitsFromDB })
})

app.get("/fruits/new", function (req, res) {
  res.render("fruits/New")
})

app.post("/fruits", async function (req, res) {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  // fruits.push(req.body)
  const createdFruit = await Fruit.create(req.body)
  console.log(createdFruit)
  res.redirect("/fruits")
})

/**
 * @path /fruits/indexOfFruitArray
 * @param /:indexOfFruitArray
 * @method GET
 * @action show
 * @description return a single fruit
 */
app.get("/fruits/:id", async function (req, res) {
  const { id } = req.params
  const fruit = await Fruit.findById(id)
  res.render("fruits/Show", { fruits: fruit })
})

app.get("/vegetables", function (req, res) {
  res.render("vegetables/Index", { vegetables: vegetables })
})

app.get("/vegetables/new", function (req, res) {
  res.render("vegetables/New")
})

app.get("/vegetables/:index", async function (req, res) {
  const index = req.params.index
  res.render("vegetables/Show", { vegetables: vegetables[index] })
})

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once("open", function () {
  console.log("Connected to mongoDB")
})

app.listen(PORT, HOSTNAME, function () {
  console.log(`Server (http://${HOSTNAME}) is starting on port ${PORT}`)
})
