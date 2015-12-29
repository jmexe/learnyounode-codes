var net = require('net')
var date = new Date()


var server = net.createServer(function (socket) {
	data = date.getFullYear() + "-" 
			+ String(date.getMonth() + 1) + "-" 
			+ date.getDate() + " " 
			+ date.getHours() + ":" 
			+ date.getMinutes()
	socket.end(data)
})
server.listen(Number(process.argv[2]))

