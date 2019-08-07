const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes') // Importar arquivo da pasta

const server = express()

mongoose.connect('Link para conectar no banco', {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes) // Colocar config de outro arquivo

server.listen(3333)