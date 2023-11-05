const express = require("express");
const router = express.Router();
const ctrlEvents = require("../controllers/events");

//events
router
  .route("/events")
  .get(ctrlEvents.eventsListByTime)
  .post(ctrlEvents.eventCreate);

router
  .route("/events/:eventId")
  .get(ctrlEvents.eventReadOne)
  .put(ctrlEvents.eventUpdateOne)
  .delete(ctrlEvents.eventDeleteOne);

module.exports = router;
