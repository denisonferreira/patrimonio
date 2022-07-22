const mysql = require('mysql2')

const conexao = mysql.createConnection({
    //host: 'mysqldb',
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'patrim_db'
})

module.exports = conexao