const express = require('express')
const router = express.Router()
const bdPersonas = require('../bd/bdUsers.json')

//esta ruta es para gestionar usuarios
router.get('/',(req,res)=>{
  res.json(bdPersonas)
})
//creación de nuevo usuario
router.post('/',(req,res)=>{
  console.log(req.body)
  const {nombres,apellidos,añoNacimiento,genero,altura,edad}=req
  if(nombres  &&  apellidos &&  añoNacimiento &&  genero  &&  altura  & edad){
    const id = bdPersonas.length  + 1
    const newUser = {...req.body,id}
    bdPersonas.push(newUser)
    res.json(bdPersonas)
  } else  {
    res.send('Error en la petición')
  }
})
module.exports = router
