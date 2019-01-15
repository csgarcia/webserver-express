const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' })
    let jsonEnd = {
        nombre: 'Carlos',
        edad: 27,
        url: req.url
    }
    res.write(JSON.stringify(jsonEnd));
    res.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');