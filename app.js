const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

app.set("view engine", "pug");

// middleware
app.use((req, res, next) => {
  console.log("hello");
  next();
});

// render from the view file
app.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

app.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

app.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb?",
  });
});

app.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

app.listen(3000, () => {
  console.log("server is hot on port 3000");
});
