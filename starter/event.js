const EventEmitter = require("events");
const http = require('http')

class Sales extends EventEmitter{

    constructor (){
        super();
    }
}

// tạo một instance
const myEmitter = new EventEmitter();
 

// đăng ký lắng nghe sự kiện "greeting"
myEmitter.on('newSale',()=>{
     console.log("xin chao toi la duy")
})

myEmitter.on('newSale',stock =>{
    console.log(`ma hang con ${stock}`)
})

// lắng nghe sự kiện
// bổ sung đối số
myEmitter.emit("newSale",9)

//////////////////////////

const server = http.createServer();

server.on('request',(req,res)=>{
    console.log("Request day");

    res.end("request received")
})

server.on('request',()=>{
    console.log("Server2")
})

server.on('close',()=>{
    console.log("đóng server")
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("đang chờ kết nối")
})