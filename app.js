const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>howdy World!</h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Bro!!</h1>");
});

app.listen(3000, () => {
  console.log("server is hot on port 3000");
});
