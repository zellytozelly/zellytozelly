var fs = require('fs')

// exports.내보낼이름
exports.mainView = function (req, res) {
    fs.readFile("./views/index.html","utf8", function(err,buf){
        res.end(buf);
    })
}