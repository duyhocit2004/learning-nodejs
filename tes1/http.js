const http = require('http')
const fs = require('fs')
const url = require('url');

const slugify = require('slugify');

const OverView = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const ProductDetail = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
//OverView 
const data = fs.readFileSync(`${__dirname}/data-json/data.json`, 'utf-8')
const productData = JSON.parse(data);


const templateHTML = (over, data) => {
    let output = over.replace(/{%id%}/g, data.id);
    output = output.replace(/{%ProductName%}/g, data.productname);
    output = output.replace(/{%image%}/g, data.image);
    output = output.replace(/{%form%}/g, data.from);
    output = output.replace(/{%nutrients%}/g, data.nutrients);
    output = output.replace(/{%quantity%}/g, data.quantity);
    output = output.replace(/{%price%}/g, data.price);
    output = output.replace(/{%description%}/g, data.description);

    return output
}
const server = http.createServer((req, res) => {
    // res.end("hello word")
    // console.log(url);
    const { query, pathname } = url.parse(req.url, true)

    // console.log(slugify("Xin Chao Ban",{
    //     lower:true,
    //     replacement : ""
    // }))

    const sults = productData.map(el => slugify(el.productname, { lower: true }))
    console.log(sults);


    if (pathname === "/" || pathname === "/OverView") {
        const CartHTML = productData.map(el => templateHTML(OverView, el)).join('');
        const output = OverView.replace('', CartHTML)
        res.end(output)
    } else if (pathname === "/product") {
        res.writeHead(200, { 'Content-type': "text/html" })
        const product = productData[query.id];
        const output = templateHTML(ProductDetail, product);
        // console.log(query)
        res.end(output);
    } else {
        res.writeHead(404, {

        });
        res.end("trang nay không tồn tại")

    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log(" lắng nghe yêu cầu")
})