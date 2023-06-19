const express = require('express')
//const path = require('path')

const db = require('./database/db') // importando a função connect do index.js
const routes = require('./routes/routes') // importando a rota

const app = express() // inicializa o express


// conexão com o banco de dados
db.connect()


// habilita server para receber dados json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)


// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))