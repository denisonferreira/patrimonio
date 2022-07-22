const Item = require('../models/itens')
const express = require('express');
const app = new express();

module.exports = app => {
    //app.get('/', (req, res) => res.send('servidor rodando, tudo ok!'))
    app.get('/', function(req, res) {
        //response.sendFile("/home/slook/Projeto/Patrimonio/index.html")
        console.log("teste")
        res.send("<!-- #######  Projeto Patrimonio #########--><h1 style='color: #5e9ca0;'>Sistema de Patrimônio</span></h1><h2 style='color: #2e6c80;'>System Idiomas</h2><form action='/patrimonio' method='GET'><p><a href='/itens'>Cadastrar Itens</a></p></form>")

    })

    app.post('/patrimonio', (req, res) => {
        const item = req.body

        Item.adiciona(item)
        console.log("Registro Cadastrado!")
            //res.send("Registro Cadastrado!")
        Item.lista(res)
            //console.log(Item.lista(res))
    })
    app.get('/itens', (req, res) => {
        //   res.send('você está na rota de itens e está realizando um GET.'))
        res.send("<!-- #######  Projeto Patrimonio #########--><h1 style='color: #5e9ca0;'>Sistema de Patrimônio</span></h1><h2 style='color: #2e6c80;'>System Idiomas</h2><form action='/patrimonio' method='post'><label for='fname'>PATRIMONIO:</label><input type='text' id='patrimonio' name='patrimonio'><br><br><label for='lname'>TIPO:</label><input type='text' id='tipo' name='tipo'><br><br><label for='ldataentrada'>Data Entrada:</label><input type='text' id='dataentrada' name='dataentrada'><br><br><label for='ldatasaida'>Data Saida:</label><input type='text' id='datasaida' name='datasaida'><br><br><input type='submit' value='Submit'></form>")

    })
    app.post('/itens', (req, res) => {
        //console.log(req.body)
        const item = req.body

        Item.adiciona(item)
        res.send('você está na rota de itens e está realizando um Post.')
    })

}