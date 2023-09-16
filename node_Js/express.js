const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("hello from home page");
});

app.get("/serverPage", (req, res) => {
  res.send("hello from simple server page");
});

app.listen(5000);
