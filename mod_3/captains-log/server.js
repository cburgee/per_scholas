const express = require("express")
const app = express()
require("dotenv").config()
const connectDB = require("./utils/connectDB")
const jsxEngine = require("jsx-view-engine")
const methodOverride = require("method-override")
const PORT = process.env.PORT || 3000
const Log = require("./models/log")

// App config
app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

// MiddleWare
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride("_method"))

// Default
app.get("/", function (req, res) {
  res.render("New")
})

//* View Routes

app.get("/logs", async function (req, res) {
  const logs = await Log.find({})
  res.render("Index", { logs })
})

//! API Routes

app.post("/api/logs", async function (req, res) {
  const body = req.body
  if (body.shipIsBroken === "on") {
    body.shipIsBroken = true
  } else {
    body.shipIsBroken = false
  }
  await Log.create(body)
  res.redirect("/logs")
})

//! Listen and connectDB
connectDB
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`)
})
