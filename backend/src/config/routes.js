//Não funciona criar uma const server aqui porque a referencia não será a mesma
const express = require('express')

//Aqui é recebido um servidor como parametro
module.exports = function(server){
  //Define URL base para todas as rotas

  //Cria uma instancia de router
  const router = express.Router()

  //Para todas as urls que começarem com /api será dicionado para o middleware router
  //O papel de server.use é dar comportamento as requisições url
  server.use('/api', router)

  //Rotas de ciclo de pagamento, tudo que for anexado a model/service será registrado na rota billingCycles
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles' )
}
