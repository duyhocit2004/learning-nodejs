const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(()=>console.log("thời gian 1"),0);
setImmediate(()=>console.log("immediate 1 finished"));

fs.readFile('test-file.txt',()=>{
    console.log("I/O finished");
    console.log("--------");

    setTimeout(()=>console.log("thời gian 2"),0);
    setTimeout(()=>console.log("thời gian 3"),3000);
    setImmediate(()=>console.log("immediate 2 finished"));
    
    process.nextTick(()=>console.log('process.nextTick()'))



    // crypto.pbkdf2( "password",'salt',100000,2014,'sha512',()=>{
    //     console.log(Date.now() - start,"password encryted")
    // })
    // crypto.pbkdf2( "password",'salt',100000,2014,'sha512',()=>{
    //     console.log(Date.now() - start,"password encryted")
    // })
    // crypto.pbkdf2( "password",'salt',100000,2014,'sha512',()=>{
    //     console.log(Date.now() - start,"password encryted")
    // })
    // crypto.pbkdf2( "password",'salt',100000,2014,'sha512',()=>{
    //     console.log(Date.now() - start,"password encryted")
    // })
    
    crypto.pbkdf2Sync( "password",'salt',100000,2014,'sha512')
    console.log(Date.now() - start,"password encryted")

    crypto.pbkdf2Sync( "password",'salt',100000,2014,'sha512')
    console.log(Date.now() - start,"password encryted")

    crypto.pbkdf2Sync( "password",'salt',100000,2014,'sha512')
    console.log(Date.now() - start,"password encryted")

    crypto.pbkdf2Sync( "password",'salt',100000,2014,'sha512')
    console.log(Date.now() - start,"password encryted")

    
})

console.log("xin chao")