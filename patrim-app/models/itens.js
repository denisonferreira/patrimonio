const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Item {
    adiciona(item) {
        const sql = 'INSERT INTO Patrim SET ?'

        conexao.query(sql, item, (erro, resultado) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        })
    }
    lista(res) {
        const sql = 'SELECT * FROM Patrim;'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Item