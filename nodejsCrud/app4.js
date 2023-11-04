const express = require("express");
const app = express();
const data = require("./API/app4")

app.use(express.json())
app.use("/data",data).listen(3000,()=>{
    console.log("server is on");
})