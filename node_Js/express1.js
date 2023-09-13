const express = require('express')

const app=express();

app.get('',(req,res)=>{
    console.log("name is => " ,req.query.name);
    res.send("welcome "+req.query.name)
})

app.get('/about',(req,res)=>{
    res.send("<h1>lorem</h1>")
})
app.listen(3100)


