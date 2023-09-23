const express = require("express");

const app = express();

// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

app.set("view engine", "pug");

// render from the view file
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb?",
  });
});

app.listen(3000, () => {
  console.log("server is hot on port 3000");
});
