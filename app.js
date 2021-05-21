

const express = require("express"),
    app = express();
    http = require('http').createServer(app),
    port = 3001;


//MySQL 설정 추가
const mysql = require('mysql');
const con = mysql.createConnection({
    host: loginData.host,
    user: loginData.user,
    password: loginData.password
});

//DB연결확인
con.connect(function(err){
    if(err)throw err;
    console.log('MySQL Connected');
})

app.use(express.static(__dirname + "/views")); //views 경로 static으로 만들기.

const routes = require("./routes/"); //index.js
app.use(routes)                      //use:경로 확장성

http.listen(port, function () {
     console.log(`http://localhost:${port}`);
})