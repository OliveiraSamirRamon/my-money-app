//Configurar servidor express

const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
//retorna um novo servidor
const server = express()

//use o bodyParser quando vier uma requisição em urlencoded
server.use(bodyParser.urlencoded({extended: true}))
//user o bodyParser quando no corpo da requisição vier uma json
server.use(bodyParser.json())

//Ouve na porta 3003, caso consiga ser alocada será impresso no console o texto
server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`)
})
