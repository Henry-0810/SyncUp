const mongoose = require("mongoose");
const Friend = mongoose.model("Friend");

const friendsListByName = function (req, res) {
  Friend.find()
    .sort({ last_name: -1 })
    .then((friends) => {
      res.status(200).json(friends);
    })
    .catch((err) => res.status(400).json(err));
};

const friendCreate = (req, res, next) => {
  const newFriend = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday,
    phone_number: req.body.phone_number,
    email: req.body.email,
    close_friend: req.body.close_friend,
  };

  Friend.create(newFriend)
    .then((friend) => {
      res.status(200).json(friend);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Error creating friend" });
    });
};

const friendReadOne = function (req, res) {
  if (req.params && req.params.friendId) {
    Friend.findById(req.params.friendId).then((friend, err) => {
      console.log(friend);
      if (!friend || err) {
        res.status(404).json({
          message: "friend id not found",
        });
        return;
      }
      res.status(200).json(friend);
    });
  } else {
    res.status(404).json({
      message: "No eventid in request",
    });
  }
};

const friendUpdateOne = function (req, res) {
  res.status(200).json({ status: "Updated friend info" });
};
const friendDeleteOne = function (req, res) {
  res.status(200).json({ status: "Deleted a friend" });
};

module.exports = {
  friendCreate,
  friendsListByName,
  friendReadOne,
  friendUpdateOne,
  friendDeleteOne,
};
