const express = require('express')
const router = express.Router()
const bdFotos = require('../bd/bdFotos.json')
router.get('/',(req,res)=>{
  res.json(bdFotos)
})
router.post('/',(req,res)=>{
  console.log(req.body)
  const {nombre,tamaño,link,tipo}=req
  if(nombre  &&  tamaño &&  link &&  tipo ){
    const id = bdFotos.length  + 1
    const newFoto = {...req.body,id}
    bdPersonas.push(newFoto)
    res.json(bdFotos)
  } else  {
    res.send('Error en la petición')
  }

})
module.exports = router
