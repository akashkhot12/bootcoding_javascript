const express= require('express');
const app = express();
const data = require('./api/data.api');

app.use(express.json());
app.use('/show',data).listen(5000,()=>{
    console.log('your code is run !');
});

// app.use(express.json())
// app.use('/gif',data).listen(8000)