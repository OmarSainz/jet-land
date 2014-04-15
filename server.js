var app    = require('./lib'),
	  http   = require('http');

var server = http.createServer(app);
server.listen(app.get('port'), function () {
	console.log('Server startup on Port =>', app.get('port'));
}); 