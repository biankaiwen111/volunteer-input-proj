const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/agreement", (req, res) => {
  console.log(req.body);
  res.send("Post agreement successfully");
});

app.get("*", (req, res) => {
  res.send("Page not found!");
});

app.post("*", (req, res) => {
  res.send("incorrect post");
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
