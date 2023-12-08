const express = require("express");
const router = express.Router();
const ctrlEvents = require("../controllers/events");
const ctrlFriends = require("../controllers/friends");
const ctrlUsers = require("../controllers/users");

//friends
router
  .route("/friends")
  .get(ctrlFriends.friendsListByName)
  .post(ctrlFriends.friendCreate);

router
  .route("/friends/:friendId")
  .get(ctrlFriends.friendReadOne)
  .put(ctrlFriends.friendUpdateOne)
  .delete(ctrlFriends.friendDeleteOne);

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

//users
router.route("/users/sign-up").post(ctrlUsers.signup);
router.route("/users/login").post(ctrlUsers.login);
router.route("/users/logout").get(ctrlUsers.logout);

module.exports = router;
