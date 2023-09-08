const express = require("express")
const app = express()
require("dotenv").config()
const connectDB = require("./utils/connectDB")
const jsxEngine = require("jsx-view-engine")
const methodOverride = require("method-override")
const PORT = process.env.PORT || 3000

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

//! API Routes

//! Listen and connectDB
connectDB
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`)
})
