class Tabelas {
    init (conexao) {
        this.conexao = conexao

        this.criarItens()
    }

    criarItens() {
        const sql = 'CREATE TABLE IF NOT EXISTS Itens (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, descricao varchar(20), dataentrada varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Itens Criada Com Sucesso!')
            }
        })
    }
}
    module.exports = new Tabelas
