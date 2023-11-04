const express = require("express");
const app = express();
const data  = require("./API/app3");

app.use(express.json());
app.use("/data",data).listen(6000,()=>{
    console.log("server is on");
})