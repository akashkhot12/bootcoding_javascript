const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("hello from home page");
});

app.get("/serverPage", (req, res) => {
  res.send(
      [
         {name : "anil",
         middleName : "bhojaraj",
         lastName : "sidhu"},
         
         {name : "anil",
         middleName : "bhojaraj",
         lastName : "sidhu"}
      ]
  );
});
app.listen(5000);
