const express = require("express")
const jsxEngine = require("jsx-view-engine")
require("dotenv").config()
const connectDB = require("./config/database")
const Flight = require("./models/Flight")
const app = express()
const methodOverride = require("method-override")
const PORT = 3000
const LOCALHOST = "127.0.0.1"

//* MiddleWare
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

//* Default Route
app.get("/", function (req, res) {
  res.redirect("/flights")
})

//* Routes

app.get("/flights", async function (req, res) {
  const flightsFromDB = await Flight.find({})
  res.render("Index", { flights: flightsFromDB })
})

app.post("/api/flights", async function (req, res) {
  await Flight.create(req.body)
  res.redirect("/flights")
})

app.get("/flights/new", async function (req, res) {
  res.render("New")
})

app.get("/flights/:id", async function (req, res) {
  const { id } = req.params
  try {
    const flight = await Flight.findById(id)
    res.render("Show", { flight })
  } catch (e) {
    console.log(e)
  }
})

app.delete("/api/flights/:id", async function (req, res) {
  const { id } = req.params
  try {
    await Flight.findByIdAndDelete(id)
    res.redirect("/flights")
  } catch (e) {
    console.log(e)
  }
})

app.put("/api/flights/add-destination/:id", async function (req, res) {
  const { id } = req.params
  const flight = await Flight.findById(id)
  flight.destination.push(req.body)
  await Flight.findByIdAndUpdate(id, flight, { new: true })
  res.redirect(`/flights/${id}`)
})

//* DB Connection
connectDB

//* Server listener
app.listen(PORT, LOCALHOST, function () {
  console.log(`App running on port ${PORT}`)
})
