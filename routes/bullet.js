const express = require("express");
const router = express.Router();

const Bullet = require("../models/Bullet");

router.post("/bullets/book", async (req, res) => {
  try {
    const { username, bulletID, seats, category, email } = req.body;
    if (req.body.seats < 100 || req.body.seats > 0) {
      const bookedBullet = new Bullet({
        username: username,
        bulletID: bulletID,
        seats: seats,
        category: category,
        email: email,
        date: new Date(),
      });
      await bookedBullet.save();
      return res.json({ message: "new bullet booked" });
    }

    if (req.body.seats > 100 || req.body.seats < 1) {
      res.json({ message: "not enough places availables" });
    }
    if (
      req.body.category !== "firstClass" &&
      req.body.category !== "economic" &&
      req.body.category !== "business"
    ) {
      res.json({ message: "bad request" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/bullets", async (req, res) => {
  try {
    const oneBullet = await Bullet.find({ email: req.body.email });
    if (oneBullet) {
      return res.json(oneBullet);
    }

    if (req.body.email !== oneBullet.email) {
      res.json({ message: "bad request" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
