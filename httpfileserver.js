var http = require('http')
var fs = require('fs')

var server = http.createServer(function callback(request, response) {
	var file = fs.createReadStream(process.argv[3])
	file.pipe(response)
})

server.listen(Number(process.argv[2]))