const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end(' <style> body{background-image: url("Personalportfoliobg.png");}</style> <h1 style="font-family: cursive;font-size: 35px;font-weight: bold;font-variant: small-caps;color: Maroon;"><p><em>Hello my name is Prashanth Addanki,I am 10 years old,I consider myself as a self taught programer and this is my portfolio</em></p></h1>')
});
server.listen('3000','127.0.0.1', () => {
    console.log('Server working...');
});