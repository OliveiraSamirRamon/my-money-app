//Libera compartilhamento de recursos entre diferentes origens
//Esse é apenas um dos passos para atender uma request, para chamar o proximo middleware foi usado o next
//Esse arquivo permite que seja feito comunicação entre o backend e o frontend, por estarem em portas diferentes são considerados recursos de origens diferentes

module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}
