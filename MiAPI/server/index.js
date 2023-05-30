const usersRouter = require('../routes/users')
const fotosRouter = require('../routes/fotos')
const express = require('express')

function  apiRouter(app){
  const router  = express.Router()
  app.use('/api/v1',router)
  router.use('/users',  usersRouter)
  router.use('/fotos',  fotosRouter)
}
module.exports = apiRouter

