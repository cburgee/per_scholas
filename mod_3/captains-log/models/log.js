const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  entry: {
    type: String,
    required: true,
  },
  shipIsBroken: {
    type: Boolean,
    required: true,
    default: true,
  },
})

const brug = mongoose.model("Log", logSchema)

module.exports = brug
