//Faz o mapeamento do objeto de como ele será gravado no banco de dados
//referencia ao node restful e ao mongoose que está dentro do noderestful
const restful = require('node-restful')
const mongoose = restful.mongoose

//criação de schemas para que exista algum nível de validação já que o mongodb é schemaless

const creditSchema = new mongoose.Schema({
  name: {type: String, required: true},
  value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
  name: {type: String, required: true},
  value: {type: Number, min: 0, required: true},
  status: {type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENDE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
  name: {type: String, required: true},
  month: {type: Number, min: 1, max: 12, required: true},
  year: {type: Number, min: 1970, max: 2100, required: true},
  credits: [creditSchema],
  debts: [debtSchema]
})

//Exporta os schemas para que sejam usados em outros modulos, o nome da model será BillingCycle e
//'billingCycleSchema' para dizer como será persistido no banco

module.exports = restful.model('BillingCycle', billingCycleSchema)
