const express = require("express");
const router = express.Router();
const ctrlMain = require("../controllers/main");
const ctrlLogin = require("../controllers/login");
const ctrlSignup = require("../controllers/signup");
/* GET home page. */
router.get("/", ctrlMain.index);
router.get("/login", ctrlLogin.login);
router.get("/signup", ctrlSignup.signup);

module.exports = router;
