//Configurar conexão com database

const mongoose = require('mongoose')

//O mongoose promise será descontinuado, por isso usaremos a parte de promise do proprio node em global.Promise
mongoose.Promise = global.Promise

//Exporta a conexão do mongodb
module.exports = mongoose.connect('mongodb://localhost/mymoney')
