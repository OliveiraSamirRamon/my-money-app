//Define os serviços rest
//o webservice rest pega os metodos http e aplica uma semantica
const BillingCycle = require('./billingCycle')

//o webservice rest pega os metodos http e aplica uma semantica
//esses são os métodos possiveis, mas não são todos obrigatórios
BillingCycle.methods(['get','post','put','delete'])
//As validações feitas nos schemas são válidas apenas para inclusão de novas registros

//Faz validações na alteração
BillingCycle.updateOptions({new: true, runValidators: true})

//.rout recebera o nome da rota e um middleware que recebera request, result e netx
BillingCycle.route('count', (req, res, next) => {
  //o método count recebe um callback
  BillingCycle.count((error, value) => {
    if(error){
      res.status(500).json({error:[error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = BillingCycle
