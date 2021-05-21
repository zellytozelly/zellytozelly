var fs = require('fs'),
configPath = __dirname + '/config.json';
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));                                           
exports.storageConfig =  parsed;

//config.json파일을 불러와서, JSON.parse로 객체에 넣은 후 외부로 export