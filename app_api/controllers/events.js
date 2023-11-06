const mongoose = require("mongoose");
const Event = mongoose.model("Event");

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
  if (req.params && req.params.eventId) {
    Event.findById(req.params.eventId).then((activity, err) => {
      console.log(activity);
      if (!activity) {
        res.status(404).json({
          message: "eventid not found",
        });
        return;
      } else if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(200).json(activity);
    });
  } else {
    res.status(404).json({
      message: "No eventid in request",
    });
  }
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
