const express = require('express')

const app=express();

app.get('/',(req,res)=>{
    console.log("name is => " ,req.query.name);
    res.send(`hello ${req.query.name} <a href = /about> go to about page</a>`)
})

app.get('/about',(req,res)=>{
    res.send(`<h1>lorem</h1> <a href ="/welcome"> go to welcome page</a>`)
})
app.listen(3100)


