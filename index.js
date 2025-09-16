const fs = require('fs');

const text = fs.readFileSync('./write.txt','utf-8');
console.log(text);

const baiviet = `tôi tên là duy, tôi sống được ${Date.now()} giây`

fs.writeFileSync('./write.txt',baiviet);