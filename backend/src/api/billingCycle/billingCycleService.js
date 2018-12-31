//Define os serviços rest
//o webservice rest pega os metodos http e aplica uma semantica
const BillingCycle = require('./billingCycle')

//o webservice rest pega os metodos http e aplica uma semantica
//esses são os métodos possiveis, mas não são obrigatórios
BillingCycle.methods(['get','post','put','delete'])
//As validações feitas nos schemas são válidas apenas para inclusão de novas registros

//Faz validações na alteração
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle
