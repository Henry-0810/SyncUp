const express = require("express");
const router = express.Router();
const ctrlMain = require("../controllers/home");
const ctrlLogin = require("../controllers/login");
const ctrlSignup = require("../controllers/signup");
/* GET home page. */
router.get("/", ctrlLogin.login);
router.get("/homepage", ctrlMain.home);
router.get("/signup", ctrlSignup.signup);

module.exports = router;
