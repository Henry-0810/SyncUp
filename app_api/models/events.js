const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  _id: String,
  title: {
    type: String,
    required: true,
  },
  description: String,
  start: {
    type: Date,
    required: true,
  },
  end: Date,
});

mongoose.model("Event", eventSchema);
