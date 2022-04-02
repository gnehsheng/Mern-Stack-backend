
const express = require('express');
const Holiday = require("../models/Holiday")
const router = express.Router();

router.get("/seed", async (req, res) => {

  const holidays = [
    {
      name: "New Year's Day",
    },
    {
      name: "Good Friday",
    }
  ]
  await Holiday.deleteMany({});
  await Holiday.insertMany(holidays)
  res.json(holidays)
})

//Create Route
router.post("/", async (req, res) => {
  try {
    const createdHoliday = await Holiday.create(req.body);
    res.status(200).send(createdHoliday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
});

//Index Route
router.get("/", async (req, res) => {
  try {
    const foundHolidays = await Holiday.find({});
    res.status(200).send(foundHolidays);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
});

//Delete Route
router.delete("/:id", async (req, res) => {
  try {
    const deletedHoliday = await Holiday.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedHoliday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
});

module.exports = router;