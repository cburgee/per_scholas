const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
    enum: ["American", "Southwest", "United"],
  },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  date: { type: String, default: Date(2024) },
})

const Flight = mongoose.model("Flight", flightSchema)

module.exports = Flight
