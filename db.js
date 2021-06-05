var mysql = require('mysql');

//DB 연결
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'my2019project',
    database: 'todo_db'
});

//DB 연결확인
db.connect(function(error){
    if(error) throw error;
    console.log('MySQL Connected');
})

module.exports=db;