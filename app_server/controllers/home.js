const events = [
  {
    title: "Basketball Competition",
    description: "Versus the Lakers",
    start: "2023-10-24T16:00:00",
    end: "2023-10-24T18:00:00",
  },
  {
    title: "Halloween Preparation",
    description: "Party preparation for Halloween",
    start: "2023-10-28",
    end: "2023-10-30",
  },
  {
    title: "Report Submission",
    description: "Report submission for algorithms",
    start: "2023-10-11T23:00:00",
  },
  {
    title: "Coffee with John",
    start: "2023-11-12T10:30:00",
  },
  {
    title: "Lunch with family",
    start: "2023-11-17T13:00:00",
  },
];

const home = function (req, res) {
  res.render("home", { title: "Sync Up", events });
};

module.exports = {
  home,
};
