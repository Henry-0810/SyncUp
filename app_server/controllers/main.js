/* GET home page */
const index = function (req, res) {
  res.render("index", { title: "Express Henry Pan" });
};

const login = function (req, res) {
  res.render("login");
};
module.exports = {
  index,
  login,
};
