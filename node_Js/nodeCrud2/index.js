const express = require('express');
const app = express();
 const data = require('./API/get.api');

 app.use(express.json());
 app.use('/useApi',data).listen(5540,()=>{
    console.log("your server is up");
 })