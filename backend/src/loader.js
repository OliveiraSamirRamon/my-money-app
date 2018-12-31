const server = require('./config/server')
require('./config/database')
//O routes exporta uma função que tem como parametro server
require('./config/routes')(server)
