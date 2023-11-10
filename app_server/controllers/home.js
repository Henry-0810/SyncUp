const { get } = require("jquery");

function getCollection(collectionName) {
  const url =
    process.env.NODE_ENV === "production"
      ? "#"
      : `http://localhost:3000/api/${collectionName}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return []; // Return an empty array or handle the error as needed
    });
}

async function home(req, res) {
  try {
    const events = await getCollection("events");
    console.log(events);
    const friends = await getCollection("friends");
    console.log(friends);
    res.render("home", { title: "Sync Up", events, friends });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  home,
};
