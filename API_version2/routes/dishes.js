import express  from "express";
const dishesRouter  = express.Router()

dishesRouter.get('/',(req,res)=>{
  res.send('🍟Ruta dishes🍟')
})


//exportar router
export default  dishesRouter;
