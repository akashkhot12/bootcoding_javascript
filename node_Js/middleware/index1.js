const express = require("express");

const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("please provide your age");
  } else if (req.query.age < 18) {
    res.send("you are under age");
  } else {
    next();
  }
};

// app.use(reqFilter);

app.get("", (req, res) => {
  res.send("welcome the home page");
});

app.get("/about",reqFilter, (req, res) => {
  res.send("welcome the about page");
});

app.get("/user", (req, res) => {
    res.send("welcome the user page");
  });

  app.get("*", (req, res) => {
    res.sendFile(`notVAlid.html`)
  });

app.listen(4100);
