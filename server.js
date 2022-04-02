require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const HolidayController = require("./controllers/holidayController")

const app = express();
const PORT = process.env.PORT ?? 2000
const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb+srv://sheng:1234@cluster0.smepc.mongodb.net/holidays"

// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

app.use("/api/holidays", HolidayController)


app.get("/", (req, res) => {
    res.send('Hi 2');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})