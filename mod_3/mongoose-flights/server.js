const express = require("express")
const jsxEngine = require("jsx-view-engine")
require("dotenv").config()
const connectDB = require("./config/database")
const Flight = require("./models/Flight")
const app = express()
const PORT = 3000
const LOCALHOST = "127.0.0.1"

//* Default Route
app.get("/", function (req, res) {
  res.send("Working!")
})

//* Routes

app.get("/flights", async function (req, res) {
  const flightsFromDB = await Flight.find({})
  res.render("Index", { flights: flightsFromDB })
})

//* MiddleWare
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

//* DB Connection
connectDB

//* Server listener
app.listen(PORT, LOCALHOST, function () {
  console.log(`App running on port ${PORT}`)
})
