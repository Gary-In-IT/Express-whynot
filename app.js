const express = require("express");

const app = express();

app.set("view engine", "pug");

// render from the pug view file
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Bro!!</h1>");
});

app.listen(3000, () => {
  console.log("server is hot on port 3000");
});
