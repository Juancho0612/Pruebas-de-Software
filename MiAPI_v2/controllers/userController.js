import Usuario from "../models/users.js";

//create
const agregar = async (req, res)  =>{
  try{
      const usuario = new Usuario(req.body);
      const usuarioGuardado = await usuario.save();
      req.json({body: usuarioGuardado, ok: "SI", msg: "Regristo exitoso." });
  } catch(error) {
      console.log(error);
  }
}

//get
const listar = async (req,res) => {
  const usuarios = await Usuario.find();
  req.json(usuarios);
}

//delete
const eliminar = async (req,res) =>{
  //recibir los parametros por la url
  const { id } = req.params;
  //validar que exita el registro
  const usuario = await Usuario.findById(id);
  console.log(usuario)

  if(!usuario){
    const error = new Error("Registro no encontrado");
    return res.status(404).json({msg: error.message, ok: "SI"});
  }

  try {
      await usuario.deleteOne();
      res.json({msg: "Registro eliminado correctamente.", ok: "SI"});
  } catch (error) {
      console.log(error);
  }
}

//edit
const editar = async(req,res) =>{
  const { id } = req.params;

  const usuario = await Usuario.findById(id);
  console.log(usuario)

  if(!usuario){
    const error = new Error("Registro no encontrado");
    return res.status(404).json({msg: error.message, ok: "SI"});
  }

  //capturar los datos del "formulario"
  usuario.nombreUsuario = rep.body.nombreUsuario || usuario.nombreUsuario;
  usuario.celularUsuario = req.body.celularUsuario || usuario.celularUsuario;

  try{
      const usuarioGuardado = await usuario.save();
      res.json({body: usuarioGuardado, msg: "registro actualizado correctamente.", ok: "SI"});
  } catch(error){
    console.log(error);
  }
}
//get by Id

const listarUno = async (req,res)=>{
  const { id } = req.params;

  const usuario = await Usuario.findById(id);
  console.log(usuario)

  if(!usuario){
    const error = new Error("Registro no encontrado");
    return res.status(404).json({msg: error.message, ok: "SI"});
  }
  res.json(usuario);
}

export{
  agregar,
  editar,
  eliminar,
  listar,
  listarUno
}
