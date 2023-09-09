const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const flightRoute = require("./routes/flight");
app.use(flightRoute);

const bulletRoutes = require("./routes/bullet");
app.use(bulletRoutes);

app.get("/", (req, res) => {
  res.json("Bienvenue sur l'API sur le projet flight de HD7594");
});

app.get("/flight/list", (req, res) => {
  res.json("liste des vols ");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("new server running");
});
