const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const allchef = require("./Data/allchef.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("chef hunter is running");
});

app.get("/allchef", (req, res) => {
  res.send(allchef);
});
app.get("/allchef/:id", (req, res) => {
  const id = req.params.id;
  const find = allchef.find((chef) => chef.id == id);

  res.send(find);
});
app.listen(port, () => {
  console.log(`chef API is running on port:${port}`);
});
