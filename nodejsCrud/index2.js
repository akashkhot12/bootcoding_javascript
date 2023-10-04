const express = require("express");
const app = express();
const data = require("./API/api2");


app.use(express.json());
app.use("/data1", data).listen(4000, () => {
  console.log("server is up");
});
