const fs = require("fs");
const superagent = require("superagent");

function ReadFilePro(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) reject("i could find not file");
      resolve(data);
    });
  });
}

const writeFile = (file,data) => {
    return new Promise ((resovle,reject)=>{
        fs.writeFile(file,data,(error)=>{
            if(error) reject("cloud not file");
        })
        return resovle("Success")
    })
}


ReadFilePro(`${__dirname}/dog.txt`)
  .then((res) => {
    return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`);
  }).then((res)=>{
    writeFile(`${__dirname}/imageDog.txt`,res.body.message);
  })
  .then(res =>{
    console.log("chỉnh sửa thành công")
  })
  .catch((error) => {
    console.log(error.message);
  });

// fs.readFile(`${__dirname}/dog.txt`, (error, data) => {
//     console.log("con cho " + data)

//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res =>{
//          fs.writeFile('imageDog.txt', res.body.message, (error) => {
//                 console.log("xin chao nhe")
//             })
//     }).catch(error =>{
//         console.log(error.message)
//     })

// })
