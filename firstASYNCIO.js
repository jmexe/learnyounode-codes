var fs = require('fs')

function readFile() {
    fs.readFile(process.argv[2], function doneReading(err, data) {
    	var str = data.toString()
	lines = str.split('\n')
	console.log(lines.length - 1)
    })
}

readFile()
