const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/data.txt`
// fs.writeFileSync(filePath,'this is a simple text file');  => create

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })  =>read

// fs.appendFile(filePath,' and file name is data.txt' ,(err)=>{
//   if(!err) console.log("file is updated");  
// })  => update


fs.rename(filePath,`${dirPath}/dataCreate.txt`,(err)=>{
    if(!err) console.log("file is renamed");
})