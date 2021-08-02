const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const util = require("util");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/agreement", (req, res) => {
  //console.log(req.body["sections"][1]["content"]);
  //console.log("--------------");
  console.log(util.inspect(req.body, { showHidden: false, depth: null }));
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
