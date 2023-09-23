const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

app.set("view engine", "pug");

// render from the view file
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hello", (req, res) => {
  res.render("hello");
});

app.post("/hello", (req, res) => {
  res.render("hello", { name: req.body.username });
});

app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb?",
  });
});

app.listen(3000, () => {
  console.log("server is hot on port 3000");
});
