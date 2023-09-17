const express = require("express");

const app = express();

app.get('',(req,res)=>{
    res.send("welcome the home page")
})
app.listen(4100)