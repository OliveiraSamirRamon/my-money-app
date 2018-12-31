//Configurar conexão com database

const mongoose = require('mongoose')

//O mongoose promise será descontinuado, por isso usaremos a parte de promise do proprio node em global.Promise
mongoose.Promise = global.Promise

//Exporta a conexão do mongodb
module.exports = mongoose.connect('mongodb://localhost/mymoney')

//muda a mensagem de erro
//'{PATH}' é o nome do atributo
mongoose.Error.messages.general.required ="O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min ="O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max ="O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum ="'{VALUE}' não é válido para o atributo '{PATH}'."
