const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (error, data) => {
    console.log("con cho " + data)

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res =>{
         fs.writeFile('dog.txt', res.body.message, (error) => {
                console.log("xin chao nhe")
            })
    }).catch(error =>{
        console.log(error.message)
    })
        
})