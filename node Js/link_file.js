const fs = require('fs');
fs.readFile('../html & css/abc.html',(err,data)=>{
    if(err){
        console.log(err)
    };
    console.log(data.toString());
    console.log('program ended');
});