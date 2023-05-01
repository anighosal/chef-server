const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const allchef = require("./Data/allchef.json");

app.get("/", (req, res) => {
  res.send("chef hunter is running");
});

app.get("/allchef", (req, res) => {
  res.send(allchef);
});

app.listen(port, () => {
  console.log(`chef API is running on port:${port}`);
});
