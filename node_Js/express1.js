// const express = require('express')

// const app=express();

// app.get('/',(req,res)=>{
//     console.log("name is => " ,req.query.name);
//     res.send(`hello ${req.query.name} <a href = /about> go to about page</a>`)
// })

// app.get('/about',(req,res)=>{
//     res.send(`<h1>lorem</h1> <a href ="/welcome"> go to welcome page</a>`)
// })
// app.listen(3100)


const express = require ("express");
 const path  = require("path");

const app = express();

const pathData  = path.join(__dirname,'htmlWithExpress');
console.log(pathData);

app.use(express.static(pathData))

app.listen(3300)

