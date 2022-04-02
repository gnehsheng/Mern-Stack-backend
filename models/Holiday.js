const mongoose = require("mongoose");
const { Schema } = mongoose;

const holidaySchema = new Schema({
  name: String,
  description: String,
  likes: Number,
  celebrated: Boolean,
});

const Holiday = mongoose.model("Holiday", holidaySchema);

module.exports = Holiday;