const http = require("http");

const data = new TextEncoder().encode(
    JSON.stringify({
        id: 21,
        title: 'watch',
        price: 5000.35
    })
)

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products',
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'content-length': data.length
    }
}

const req = http.request(options, res => {
    console.log(`Status Code : ${res.statusCode}`)
    res.on('data', product => {
        process.stdout.write(product);
    })
    res.on('error', error => {
        console.log(error);
    })
})
req.write(data);
req.end();
