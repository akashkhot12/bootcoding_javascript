const express= require('express');
const app = express();
const data = require('./api/data.api');

app.use(express.json());
app.use('/show',data).listen(4000,()=>{
    console.log('your code is run !');
});