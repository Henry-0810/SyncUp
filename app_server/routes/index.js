const express = require("express");
const router = express.Router();
const ctrlMain = require("../controllers/main");
const ctrlLogin = require("../controllers/login");
/* GET home page. */
router.get("/", ctrlMain.index);
router.get("/login", ctrlLogin.login);

module.exports = router;
