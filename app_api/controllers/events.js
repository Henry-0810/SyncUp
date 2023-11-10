const mongoose = require("mongoose");
const Event = mongoose.model("Event");

const eventsListByTime = function (req, res) {
  Event.find()
    .sort({ start: -1 })
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((err) => res.status(400).json(err));
};

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

const eventReadOne = function (req, res) {
  if (req.params && req.params.eventId) {
    Event.findById(req.params.eventId).then((event, err) => {
      console.log(event);
      if (!event || err) {
        res.status(404).json({
          message: "eventid not found",
        });
        return;
      }
      res.status(200).json(event);
    });
  } else {
    res.status(404).json({
      message: "No eventid in request",
    });
  }
};

const eventUpdateOne = function (req, res) {
  const updatedEvent = {
    title: req.body.title,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
  };
  Event.updateOne({ _id: req.params.eventId }, updatedEvent)
    .then((event) => {
      console.log(event);
      res.status(200).json(event);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Error updating event" });
    });
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
