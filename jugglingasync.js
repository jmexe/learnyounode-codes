var http = require("http")
var bl = require('bl')
var list = ["", "", ""]
var cnt = 0

function juggling(index) {
	http.get(process.argv[index + 2], function callback(response) {
		response.pipe(bl(function(err, data) {
			if (err) {
				throw err
			}
			else {
				data = data.toString()
				list[index] = data
				cnt++

				if (cnt == 3) {
					for (var i = 0; i < 3; i++) {
						console.log(list[i])
					}
				}
			}
		}))
	})
} 

juggling(0)
juggling(1)
juggling(2)
