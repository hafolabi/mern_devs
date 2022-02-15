var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
})

conn.connect((err) => {
    if (err)
        throw err;
    console.log("connection successfull")
})