const _ = require('lodash')
module.exports = (req, res, next) => {
  //dentro de local.bundle está a lista de erros que aparece no postman
  const bundle = res.locals.bundle

  if(bundle.errors){
    const errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  }else{
    next()
  }
}

const parseErrors = (nodeRestfulErrors) => {
  //O fato do array apontar para uma constante não significa que não é possivel colocar novos elementos
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}
