import express from "express";
import dotenv from 'dotenv';
import conectarBD  from "./config/db.js";
import apiRouter from "./server/index.js";

//iniciamos express
const app = express()
app.use(express.json())//leer formatos json

//inicamos entorno de desarrollo
dotenv.config();

//Conectamos a mongo DB
conectarBD();


//llamado de variables de entorno
apiRouter(app)
const port = process.env.PORT || 3000

//ejecucion de la API
app.listen(port,()=>{
  console.log('API en funcionamiento en el puerto '+ port)
})

export default app;
