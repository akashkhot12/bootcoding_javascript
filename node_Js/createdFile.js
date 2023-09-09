// file created code 

const fs  = require ('fs');
const path = require('path');
const dirPath=path.join(__dirname,'files')
// for (let index = 0; index < 5; index++) {

//     fs.writeFileSync(dirPath+"/hello"+index+".txt","a simple text")
// }



// files read code 
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("your file is => "+ item);
    })
})