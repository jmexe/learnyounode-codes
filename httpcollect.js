var http = require('http')
var bl = require('bl')

function httpcollect() {

    http.get(process.argv[2], function callback(response) {

		response.pipe(bl(function (err, data) {
			if (err) {
				throw err
			}
			else {
				data = data.toString()
				console.log(data.length)
				console.log(data)
			}
			
		}))
    })
}

httpcollect()