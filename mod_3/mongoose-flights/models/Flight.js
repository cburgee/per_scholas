const mongoose = require("mongoose")

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    required: true,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
  },
  arrival: { type: String },
})

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
    enum: ["American", "Southwest", "United"],
  },
  flightNo: { type: Number, required: true, min: 10, max: 9999 },
  date: { type: String, default: new Date(2024).toLocaleTimeString() },
  airport: {
    type: String,
    required: true,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
  },
  destination: [destinationSchema],
})

const Flight = mongoose.model("Flight", flightSchema)

module.exports = Flight
