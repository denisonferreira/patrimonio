const mysql = require('mysql2')

const conexao = mysql.createConnection({
    //host: 'mysqldb',
    host: 'mysqldb',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'patrim_db'
})

module.exports = conexao