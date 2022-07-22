class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarItens()
    }

    criarItens() {
        const sql = 'CREATE TABLE IF NOT EXISTS Patrim (id int NOT NULL AUTO_INCREMENT, patrimonio varchar(50) NOT NULL, tipo varchar(20), dataentrada varchar(20), datasaida varchar(20), status varchar(20), observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Itens Criada Com Sucesso!')
            }
        })
    }
}
module.exports = new Tabelas