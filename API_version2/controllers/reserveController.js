import Reserve from '../models/reserves.js'

//Create
const agregar = async(req,res)=>{
  try{
      const reserva = new Reserve(req.body);
      const reservaGuardada = await reserva.save();
      res.json({body: reservaGuardada, ok: "SI", msg: "Reserva creada exitosamente"})
  } catch(error){
    console.log(error);
  }
}
//Read
const listar = async(req,res)=>{
  const reservas=await Reserve.find();
  res.json(reservas);
}
//Delete
const eliminar = async(req,res) =>{
  const { id } = req.params;

  const reserva = await Reserve.findById(id);
  console.log(reserva);

  if(!reserva) {
    const error = new Error("Reserva no encontrada.")
    return res.status(404).json({ msg: error.message, ok: "SI"});
  }
  try {
    await reserva.deleteOne();
    res.json({ msg: "REserva eliminada con éxito.", ok: "SI"});
  }catch(error){
    console.log(error);
  }
}
//Update
const editar = async(req,res)=>{
  const { id } =req.params;

  const reserva = await Reserve.findById(id);
  console.log(reserva)
  if(!reserva) {
    const error = new Error("Reserva no encontrada.")
    return res.status(404).json({ msg: error.message, ok: "SI"});
  }

  //Capturar los datos del formulario
  reserva.tipo = req.body.tipo || reserva.tipo;
  reserva.fecha = req.body.fecha || reserva.fecha;
  reserva.hora = req.body.hora || reserva.hora;
  reserva.personas = req.body.personas || reserva.personas;
  reserva.numeroPersonas = req.body.numeroPersonas || reserva.numeroPersonas;
  try {
    const reservaGuardada = await reserva.save();
    res.json({body: reservaGuardada, ok: "SI", msg: "Reserva actualizada exitosamente", ok: "SI"});

  }catch(error){
    console.log(error);
  }
}
//ReadOne
const listarUno = async(req,res)=>{
  const { id } = req.params;

  const reserva = await Reserve.findById(id);
  if(!reserva) {
    const error = new Error("Reserva no encontrada.")
    return res.status(404).json({ msg: error.message, ok: "SI"});
  }
  res.json(reserva);
}

export{
  agregar,
  listar,
  eliminar,
  editar,
  listarUno
}
