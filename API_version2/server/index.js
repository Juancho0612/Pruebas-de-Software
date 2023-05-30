import reservesRouter from '../routes/reserves.js'
import dishesRouter from '../routes/dishes.js'
import express  from 'express'
import swaggerUi  from "swagger-ui-express";
import openApiConfiguration from "../docs/swagger.js";

function apiRouter(app){
  const router = express.Router()
  app.use('/api/v2',router)
  router.use('/reserves',reservesRouter)
  router.use('/dishes',dishesRouter)
  router.use('/documentation', swaggerUi.serve, swaggerUi.setup(openApiConfiguration))
}

export default  apiRouter;

