const express = require('express');
const app = express();
const data = require('./API/api')

app.use(express.json());
app.use('/data',data).listen(5000,()=>{
    console.log('server is up');
}) ;