const express = require("express");

const app = express();

const reqFilter=(req,res,next)=>{
    console.log("reqFilter");
    next();
}

app.use(reqFilter);

app.get('',(req,res)=>{
    res.send("welcome the home page")
})

app.get('/about',(req,res)=>{
    res.send("welcome the about page")
})
app.listen(4100)