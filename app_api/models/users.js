const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: String,
    last_name: String,
    birthday: Date,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
  },
  {
    versionKey: false,
    collection: "Users",
  }
);

User.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

mongoose.model("User", User);
