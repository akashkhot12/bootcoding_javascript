const express = require("express");
const app = express();
const data = require("./API/chetna")

app.use(express.json());
app.use("/chetna",data).listen(5000,()=>{
    console.log("server is up");
})