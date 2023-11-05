const mongoose = require("mongoose");
const Event = mongoose.model("Event");
const ObjectId = mongoose.Types.ObjectId;

const eventCreate = (req, res, next) => {
  const newEvent = {
    title: req.body.title,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
  };

  Event.create(newEvent)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Error creating event" });
    });
};

const eventsListByTime = function (req, res) {
  res.status(200).json({ status: "Listed events by time" });
};

const eventReadOne = function (req, res) {
  console.log(req.params.eventId);
  const eventId = new ObjectId(req.params.eventId);
  Event.findOne({ _id: eventId })
    .then((event) => {
      console.log(event);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: "Event not found" });
      }
    })
    .catch((err) => {
      console.error("Error in eventsReadOne: ", err);
      res.status(500).json({ message: "Internal server error" });
    });
};

const eventUpdateOne = function (req, res) {
  res.status(200).json({ status: "Update an event" });
};
const eventDeleteOne = function (req, res) {
  res.status(200).json({ status: "Delete an event" });
};

module.exports = {
  eventCreate,
  eventsListByTime,
  eventReadOne,
  eventUpdateOne,
  eventDeleteOne,
};
