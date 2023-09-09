const mongoose = require("mongoose");

const Flight = mongoose.model("flight", {
  name: String,
  date: String,
  seats: {
    firstClass: Number,
    economic: Number,
    business: Number,
  },
});

module.exports = Flight;
