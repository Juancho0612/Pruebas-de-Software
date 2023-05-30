import express from 'express';
import dotenv from 'dotenv';
import conectarBD from './config/db.js';

//importar rutas

import userRoutes from "./routes/usersRoutes.js"

//iniciamos el servidor express

//inicializamos express
const app= express()
//leemos los datos en formato json
app.use(express.json())

//Iniciamos varibales del entorno
dotenv.config();

//conectar a BD mongo
conectarBD();

//Routing del API
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3002

app.listen(PORT,()=>{
  console.log(`API escuchando en ${PORT}😶‍🌫️`)
})

