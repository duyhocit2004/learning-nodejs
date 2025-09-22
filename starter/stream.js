const fs = require('fs');
const server = require('http').createServer();


server.on('request',(req,res)=>{

    //Solution 1
    //  fs.readFile('test-file.txt',(error ,data)=>{
    //     if(error) console.log(error)
        
    //     res.end(data)
    //  })

     //Solution 2 : Streams
    //   const redable = fs.createReadStream('test-file.txt');
    //   redable.on('data',chunk =>{
    //     res.write(chunk)
    //   })

    //   redable.on('end',()=>{
    //     res.end()
    //   })


    //solution 3
      const redable = fs.createReadStream('test-file.txt');
      redable.pipe(res)

})

server.listen(8000,'127.0.0.1',()=>{
    console.log('listien')
})