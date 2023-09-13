const express = require('express')

const app=express();

app.get('',(req,res)=>{
    res.send("hello this is web page")
})

app.get('/about',(req,res)=>{
    res.send("<h1>lorem</h1>")
})
app.listen(3100)


