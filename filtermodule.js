var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
    var list = []
    fs.readdir(dir, function(err, data) {
        if (err) {
            return callback(err)
        }
        else {
            for (index = 0; index < data.length; index++) {
                if (path.extname(data[index]) == '.' + ext) {
                    list.push(data[index])
                }
            }
        }

        return callback(null, list)
    })
}

