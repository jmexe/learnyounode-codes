var http = require('http')

function get() {

    http.get(process.argv[2], function callback(response) {
	response.on('data', function callback(data) {
	    console.log(String(data))
	})
    })
}

get()


