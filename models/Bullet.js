const mongoose = require("mongoose");

const Bullet = mongoose.model("bullet", {
  username: String,
  bulletId: String,
  seats: Number,
  category: String,
  email: String,
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
  },
});

module.exports = Bullet;
