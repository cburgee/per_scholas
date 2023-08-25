const express = require("express")
const app = express()
const PORT = 3000
const HOSTNAME = "127.0.0.1"

// Routes
app.get("/", function (req, res) {
  res.send(
    `<h1>99 bottles of beer on the wall</h1>\n<a href="/98">Take one down and pass it around!</a>`
  )
})

app.get("/:numberOfBottles", function (req, res) {
  const numOfBottles = req.params.numberOfBottles
  const nextPage = numOfBottles - 1
  if (nextPage === -1) {
    res.send("No more bottles! They are all gone :D")
  } else {
    res.send(
      `<a href="/${nextPage}">${nextPage} bottles of beer on the wall.</a>`
    )
  }
})

// Listen!!

app.listen(PORT, HOSTNAME, function () {
  console.log("Server running...")
})
