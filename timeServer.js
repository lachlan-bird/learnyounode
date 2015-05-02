var net = require('net');

function zeroFill(value) {
	if(String(value).length == 1) return '0' + value;
	return value;
}

var server = net.createServer(function (socket) {
	var date = new Date();
	socket.end(date.getFullYear()+'-'+zeroFill(date.getMonth()+1)+'-'+zeroFill(date.getDate())+' '+date.getHours()+':'+date.getMinutes()+'\n');
});

server.listen(process.argv[2]);