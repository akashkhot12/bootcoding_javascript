const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("this is json data");
});

app.listen(4000);
