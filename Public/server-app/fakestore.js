const http = require("http");

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}

const req = http.request(options, res => {
    console.log(`Status Code: ${res.statusCode}`);
    res.on('data', product => {
        process.stdout.write(product);
    })
    res.on('error', error => {
        console.error(error);
    })
})
req.end();