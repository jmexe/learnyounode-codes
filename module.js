var filtermodule = require('./filtermodule.js')

var dir = process.argv[2]
var ext = process.argv[3]

filtermodule(dir, ext, function(err, data) {
	if (err) {
		throw err
	}
	else {
		for (var index = 0; index < data.length; index++) {
			console.log(data[index])
		}
	}
})

