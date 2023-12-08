const fs = require("fs");
const http = require("http");
const https = require("https");
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

// const privateKey = fs.readFileSync("./SSL/key.pem", "utf8");
// const certificate = fs.readFileSync("./SSL/csr.pem", "utf8");
// const credentials = { key: privateKey, cert: certificate };

// const httpServer = http.createServer(express());
// const httpsServer = https.createServer(credentials, express());

const app = express();
const corsOptions = {
  origin: "http://localhost:4200",
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
};

app.use(flash());
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
    // store: MongoStore.create({
    //   mongoUrl: process.env.URI,
    // }),
  })
);

app.use("/api", apiRouter);
app.use(express.static(path.join(__dirname, "app_public/build/browser")));

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "app_public/build/browser", "index.html"));
});

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ error: err.message });
});

// httpServer.listen(3000);
// httpsServer.listen(443);

module.exports = app;
