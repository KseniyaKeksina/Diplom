var express = require("express");

var app = express();

app.use(express.static(__dirname + "/clientApp"));
// Загружаем модуль файловой системы
var fs = require('fs');

var credentials = {
    key: fs.readFileSync('./tmpSert/key.pem'),
    cert: fs.readFileSync('./tmpSert/certificate.pem')
  };

const http = require('http');
const https = require('https');

const hostname = '127.0.0.1';
const port = 3000; //80
const ports = 3003; //443

// app.listen(port);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
httpsServer.listen(ports);

// app.get("/", function(request, response){
  
//  response.send("<h1>Главная страница</h1>");
// });
// const server = http.createServer((req, res) => {
//   // Считываем содержание файла в память
//   fs.readFile('clientApp/index.html', function (err, logData) {

//     // Если возникла ошибка, мы кидаем исключение
//     // и программа заканчивается
//     if (err) throw err;

//     // logData это объект типа Buffer, переводим в строку
//     var text = logData.toString();
//     res.statusCode = 200;
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.end('Hello World\n');
//     res.end(text);//  '<html><body><h1>Hello, World!</h1></body></html>');
//   });


// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });