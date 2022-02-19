const Item = require('../models/itens')

module.exports = app => {
    app.get('/', (req, res) => res.send('servidor rodando, tudo ok!'))
    
    app.get('/itens', (req, res) => res.send('você está na rota de itens e está realizando um GET.'))

    app.post('/itens', (req, res) => {
        //console.log(req.body)
        const item = req.body

        Item.adiciona(item)
        res.send('você está na rota de itens e está realizando um Post.')
    })
    
}