var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var reqUrl = url.parse(req.url, true);
	var isoTime = reqUrl.query.iso;
	var date = new Date(isoTime);
	res.writeHead(200, { 'Content-Type': 'application/json' })
	
	switch(reqUrl.pathname) {
		case '/api/parsetime':
			res.end(JSON.stringify({
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}));
			break;
		case '/api/unixtime':
			res.end(JSON.stringify({
				unixtime: Math.floor(date.getTime())
			}));
			break;
		default: 
			break;
	}
});

server.listen(Number(process.argv[2]));