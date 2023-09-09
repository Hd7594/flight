const express = require("express");

const router = express.Router();

const Flight = require("../models/Flight");

router.post("/flight/create", async (req, res) => {
  try {
    const { name, date } = req.body;
    const flight1 = new Flight({
      name: name,
      date: date,
      seats: {
        firstClass: 60,
        economic: 340,
        business: 120,
      },
    });
    await flight1.save();
    res.json(flight1);
    // console.log(flight1);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/flight/list", async (req, res) => {
  try {
    const flightList = await Flight.find({ date: req.body.date });
    res.json(flightList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/flight/delete", async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.body.id);
    if (deletedFlight) {
      res.json({ message: "flight deleted" });
    } else {
      res.json({ message: "bad request" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/flight", async (req, res) => {
  try {
    const idFlight = await Flight.findById(req.query.id);
    if (idFlight) {
      res.json(idFlight);
    } else {
      res.json({ message: "request not founded" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
