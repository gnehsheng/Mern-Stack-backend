
const express = require('express');
const Holiday = require("../models/Holiday")
const router = express.Router();

router.get("/seed", async (req, res) => {
  await Holiday.deleteMany({});
  await Holiday.insertMany([
    {
      name: "New Year's Day",
    },
    {
      name: "Good Friday",
    }
  ])
  res.send("holidays seeded")
})

router.get('/', (req, res) => {
  res.send('holidays');
})

module.exports = router;