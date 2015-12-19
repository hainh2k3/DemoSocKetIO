var http = require('http');
var io = require('socket.io').listen(8000);
var fs = require('fs');
var express = require('express');
var app = express();

io.sockets.on('connection', function (socket) {
	socket.on('tn_den_server', function (data) {
		var _dt = new Date();
		var _tg = _dt.getHours() + ':' + _dt.getMinutes() + ':' + _dt.getSeconds();
		var kq = {
			tinnhan : data['message'],
			thoigian : _tg
		};
		//io.sockets.emit('tn_den_client', { message: data['message'] , thoigian : _tg }); 
		io.sockets.emit('tn_den_client', kq);
	});
});

//function serverListener(request, response) { 
//	fs.readFile('www/index.html', { 'Encoding': 'utf-8' }, function (err, data) {
//		response.writeHead(200, { 'Content-Type': 'text/html' });
//		response.write(data);
//		response.end();
//	});
//}

//http.createServer(serverListener).listen(80);

//app.get('/', function (request, response) { 
//	response.send('abc');
//});

app.use('/', express.static('www'));

app.listen(80);


