const http = require('http')

const hostname = '127.0.0.1' // localhsot
const port = 8080


function test(req, res) {
    console.log(req);
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello World  fffff\n');
    res.end();
}

const server = http.createServer(test);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})