const express = require("express")
require("dotenv").config()
const app = express()
const PORT = 3000
const HOSTNAME = "127.0.0.1"
const connectDB = require("./utils/connectDB")
const Tweet = require("./models/Tweet")
const manyTweets = require("./models/manyTweets")
const jsxEngine = require("jsx-view-engine")
const methodOverride = require("method-override")

app.get("/", function (req, res) {
  res.send("Working!")
})
// * App config
app.set("view engine", "jsx")
app.engine("jsx", jsxEngine())

//*MiddleWare
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride("_method"))

//* Routes

//* ============== View Routes

app.get("/tweets", async function (req, res) {
  try {
    const tweets = await Tweet.find({})
    res.render("Index", { tweets })
  } catch (e) {
    console.log(e)
  }
})

// * New
app.get("/tweets/new", function (req, res) {
  res.render("New")
})

app.get("/tweets/:id/edit", async function (req, res) {
  const { id } = req.params
  try {
    const tweet = await Tweet.findById(id)
    res.render("Edit", { tweet })
  } catch (e) {
    console.log(e)
  }
})

app.get("/tweets/:id", async function (req, res) {
  const { id } = req.params
  try {
    const tweet = await Tweet.findById(id)
    res.render("Show", { tweet })
  } catch (e) {
    console.log(e)
  }
})

//* ================ API Routes

app.post("/api/tweets", async function (req, res) {
  await Tweet.create(req.body)
  res.redirect("/tweets")
})

app.put("/api/tweets/:id", async function (req, res) {
  try {
    const { id } = req.params
    if (req.body.sponsored === "on") {
      req.body.sponsored = true
    } else {
      req.body.sponsored = false
    }
    // const tweetToUpdate = await Tweet.findById(id)
    const updatedTweet = await Tweet.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.redirect(`/tweets/${id}`)
  } catch (e) {
    console.log(e)
  }
})

// * Delete
app.delete("/api/tweets/:id", async function (req, res) {
  const { id } = req.params
  try {
    await Tweet.findByIdAndDelete(id)
    res.redirect("/tweets")
  } catch (e) {
    console.log(e)
  }
})

//* Add Comment
app.put("/api/tweets/add-comment/:id", async function (req, res) {
  const { id } = req.params
  const tweet = await Tweet.findById(id)
  tweet.comments.push(req.body)
  const updatedTweet = await Tweet.findByIdAndUpdate(id, tweet, { new: true })
  res.redirect(`/tweets/${id}`)
})

// * Increase Likes
app.get("/api/tweets/add-like/:id", async function (req, res) {
  const { id } = req.params
  const tweetToUpdate = await Tweet.findById(id)
  tweetToUpdate.likes++
  const updatedTweet = await Tweet.findByIdAndUpdate(id, {
    likes: tweetToUpdate,
    new: true,
  })
  res.redirect("/tweets")
})

app.get("/api/tweets/seed", async function (req, res) {
  const createdTweets = await Tweet.insertMany(manyTweets)
  res.send(createdTweets)
})

connectDB
app.listen(PORT, HOSTNAME, function () {
  console.log(`App running on port ${PORT}`)
})
