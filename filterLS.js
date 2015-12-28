var fs = require('fs')
var path = require('path')
dir = process.argv[2]
ext = process.argv[3]

function filter() {
    fs.readdir(dir, function doneReading(err, data) {
	for (index = 0; index < data.length; index++) {
	    if (path.extname(data[index]) == '.' + ext) {
	        console.log(data[index])
	    }
	}
    })
}

list = filter()
