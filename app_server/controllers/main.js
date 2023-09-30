/* GET home page */
const index = function (req, res) {
  res.render("index", { title: "Express Henry Pan" });
};

module.exports = {
  index,
};
