const express = require('express')
const apiRouter = require('./server')
const app = express()
const morgan = require('morgan')
require('dotenv').config

//Middlewares
app.use(morgan('dev'))
app.use(express.json())


//ruta principal,home del API
app.get('/',(req,res)=>{
  res.send('Estas en la raiz ')
})

//apiRouter nos renderizara las rutas creadas
apiRouter(app)

const port  = process.env.PORT  ||  3000

//COentario cuando se da el Lanzamiento API

app.listen(port,()=>{
  console.log('Api ejecutandose en el puerto '+ port)
})

