const express = require("express");
const router = express.Router();
const ctrlEvents = require("../controllers/events");

//events
router
  .route("/events")
  .get(ctrlEvents.eventsListByTime)
  .post(ctrlEvents.eventsCreate);

router
  .route("/events/:eventId")
  .get(ctrlEvents.eventsReadOne)
  .put(ctrlEvents.eventsUpdateOne)
  .delete(ctrlEvents.eventsDeleteOne);

module.exports = router;
