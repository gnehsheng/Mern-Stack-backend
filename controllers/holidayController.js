
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
  await Holiday.findByIdAndRemove(req.params.id);
  res.json({ message: "Holiday Deleted" });
});


module.exports = router;