const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'operation')
const filePath = `${dirPath}/operation1.txt`;
fs.writeFileSync(filePath,' this is operation file');

