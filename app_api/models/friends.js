const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    phone_number: Number,
    email: String,
    close_friend: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    collection: "Friends",
  }
);

mongoose.model("Friend", eventSchema);
