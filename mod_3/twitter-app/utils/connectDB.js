const mongoose = require("mongoose")

function connectDB() {
  // Connecting to mongodb
  mongoose.connect(process.env.MONGO_URI)

  // Check for a connection
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

// setTimeout(function () {
//   db.close()
// }, 5000)

module.exports = connectDB()
