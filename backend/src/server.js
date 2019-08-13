const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes') 

const server = express()

mongoose.connect('Endereço banco de dados no Atlas', {
    useNewUrlParser: true
})

server.use(cors()) 
server.use(express.json())
server.use(routes) 


server.listen(xxxx)
