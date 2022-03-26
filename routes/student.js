const express = require("express");
const students = require("../students");
const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const s = new Date();
  let day = weekday[s.getDay()];
  const d = new Date();
  const hour = d.getHours();
  if (hour > 9 && hour < 18 && day != 6) {
    res.render("available");
  } else {
    res.render("notAvailable");
  }
});

module.exports = studentRouter;
