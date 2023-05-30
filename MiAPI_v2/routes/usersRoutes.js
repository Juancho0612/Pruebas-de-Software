import express  from "express";
const router = express.Router();

import { agregar,listar,editar,eliminar,listarUno } from "../controllers/userController.js";

//rutas para gestionar usuarios

router.get("/",listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/", editar);
router.delete("/:id", eliminar);

export default router;
