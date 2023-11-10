const mongoose = require("mongoose");
require("dotenv").config();

try {
  mongoose.connect(process.env.URI).then(
    () => {
      console.log("Mongoose is connected");
    },
    (err) => {
      console.log(err);
    }
  );
} catch (e) {
  console.log(e);
}

require("./events");
require("./friends");
