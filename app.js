const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("./app_api/models/db");
require("dotenv").config();

const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
var flash = require("connect-flash");

const apiRouter = require("./app_api/routes/index");
const MongoStore = require("connect-mongo");

const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "app_server", "views"));
// app.set("view engine", "pug");

app.use(flash());
app.use(cors({ origin: "http://localhost:4200" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// favicon
app.use(
  "/favicon.ico",
  express.static(
    path.join(__dirname, "app_public/build/browser", "favicon.ico")
  )
);
app.use(
  session({
    secret: "MTU Web Frameworks 2023",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.URI,
    }),
  })
);

app.use(express.static(path.join(__dirname, "app_public/build/browser")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", apiRouter);

require("./config/passport")(passport);

app.use(passport.initialize());
app.use(passport.session());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "app_public/build/browser", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // Send error as JSON response
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
