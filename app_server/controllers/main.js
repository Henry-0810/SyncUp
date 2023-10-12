/* GET home page */
const home = function (req, res) {
  res.render("home", { title: "Express Henry Pan" });
};

module.exports = {
  home,
};
