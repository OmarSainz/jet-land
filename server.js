var app    = require('./lib'),
	  http   = require('http');

var server = http.createServer(app);
var io = require('socket.io').listen(server, {log:false});
var realtime = require('./lib/realtime');

realtime ( io );

server.listen(app.get('port'), function () {
	console.log('Server startup on Port =>', app.get('port'));
}); 