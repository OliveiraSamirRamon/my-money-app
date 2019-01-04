//Aqi são configuradas as rotas (junto com routes), o tratamento de erros (junto com errorHandler), os métodos http (junto com billingCycle)

//Define os serviços rest
//o webservice rest pega os metodos http e aplica uma semantica
const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')
//o webservice rest pega os metodos http e aplica uma semantica
//esses são os métodos possiveis, mas não são todos obrigatórios
BillingCycle.methods(['get','post','put','delete'])
//As validações feitas nos schemas são válidas apenas para inclusão de novas registros

//Faz validações na alteração
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', errorHandler).after ('put', errorHandler)

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

BillingCycle.route('summary', (req, res, next) =>{
  BillingCycle.aggregate({
    //dentro do project foi posto aquilo se quer extrair do objeto billingCycle
    //'credit' e 'debit' não existem dentro do objeto billingCycle, lá estão no plural
    //esses campos são a soma dos valores (values) do array credits e debits dos objetos billingCycle
    $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"} }
  },{
    //'credit' e 'debit'  são variaveis novas, que recebem a soma feita no passo anterior
    $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
  },{
    $project: {_id: 0, credit: 1, debt: 1}
  },(error, result) => {
    if(error){
      res.status(500).json({errors: [error]})
    }else{
      res.json(result[0] || {credit: 0, debt: 0 })
    }
  })
})

module.exports = BillingCycle
