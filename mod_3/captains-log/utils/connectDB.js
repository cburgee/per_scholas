const mongoose = require("mongoose")

function connectDB() {
  mongoose.connect(process.env.MONGO_URI)

  const db = mongoose.connection
  db.on("error", function (e) {
    console.log(e)
  })
  db.on("open", function () {
    console.log("Connected to MongoDB")
  })
  db.on("closed", function () {
    console.log("Connection Closed")
  })
}

module.exports = connectDB()
