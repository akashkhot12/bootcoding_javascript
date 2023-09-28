const express = require('express');
const app = express();
const data = require("./Api/data.api");

app.use(express.json());
app.use('/data',data).listen(4000,()=>{
  console.log("server is run");
})