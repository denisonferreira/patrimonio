const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'patrim_db'
})

module.exports = conexao