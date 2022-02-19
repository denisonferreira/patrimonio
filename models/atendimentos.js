const conexao = require('../infraestrutura/conexao')

class Item {
    adiciona(Item) {
        const sql = 'INSERT INTO Itens SET ?'

        conexao.query(sql, item, (erro, resultado) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        })
    }
}
module.exports = new Item