const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'data')
const filePath = `${dirPath}/operation1.txt`;
fs.writeFileSync(filePath,' this is operation file');

