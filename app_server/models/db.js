const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://HenryPan:Henry2002$@cluster0.e4fl7ff.mongodb.net/?retryWrites=true&w=majority";

try {
  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      () => {
        console.log("Mongoose is connected!");
      },
      (err) => {
        console.log("Mongoose connection failed.\nError: " + err);
      }
    );
} catch (err) {
  console.log("could not connect");
}
