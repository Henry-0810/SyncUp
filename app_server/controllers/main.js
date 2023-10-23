/* GET home page */
const home = function (req, res) {
  res.render("home", { title: "Sync Up" });
};

module.exports = {
  home,
};
