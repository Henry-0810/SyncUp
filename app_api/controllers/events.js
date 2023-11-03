const mongoose = require("mongoose");
const Event = mongoose.model("Event");
const ObjectId = mongoose.Types.ObjectId;

const eventsCreate = function (req, res) {
  res.status(200).json({ status: "Created a new event" });
};

const eventsListByTime = function (req, res) {
  res.status(200).json({ status: "Listed events by time" });
};

const eventsReadOne = function (req, res) {
  console.log(req.params.eventId);
  const eventId = new ObjectId(req.params.eventId);
  Event.find({ _id: req.params.eventId })
    .then((event) => {
      console.log(event);
      return event
        ? res.status(200).json(event)
        : res.status(404).json({ message: "Event not found" });
    })
    .catch((err) => {
      console.error("Error in eventsReadOne: ", err);
      res.status(500).json({ message: "Internal server error" });
    });
};

const eventsUpdateOne = function (req, res) {
  res.status(200).json({ status: "Update an event" });
};
const eventsDeleteOne = function (req, res) {
  res.status(200).json({ status: "Delete an event" });
};

module.exports = {
  eventsCreate,
  eventsListByTime,
  eventsReadOne,
  eventsUpdateOne,
  eventsDeleteOne,
};
