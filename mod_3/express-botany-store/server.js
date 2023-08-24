// import the express package
const express = require("express")

// create an instance of express
const app = express()
const PORT = 3000

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
]

app.get("/", function (req, res) {
  console.log(req.method)
  res.send("<h1>Testing!</h1>")
})

app.get("/plants", function (req, res) {
  res.status(200).json(plants)
})

app.get("/awesome", function (req, res) {
  res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `)
})

app.get("/:indexOfPlantsArray", function (req, res) {
  let index = req.params.indexOfPlantsArray
  if (plants[index]) {
    res.send(plants[index])
  } else {
    res.status(404).send(`Couldn't find anything at ${index} index.`)
  }
})

app.get("/hello/:firstname/:lastname", function (req, res) {
  let firstName = req.params.firstname
  let lastName = req.params.lastname
  if (firstName && lastName) {
    res.status(200).send(`Hello, ${firstName} ${lastName}`)
  } else {
    res.status(404).send("Can't finish request, issue with params.")
  }
})

app.get("/howdy/:firstName", function (req, res) {
  let title = req.query.title
  let firstName = req.params.firstName
  res.send(`hello ${title} ${firstName}`)
})

app.listen(PORT, function () {
  console.log("Server is running!")
})
