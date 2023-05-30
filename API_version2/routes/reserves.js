import express from "express"
//se llama a router
const reservesRouter = express.Router()

import { agregar,listar,eliminar,editar,listarUno } from "../controllers/reserveController.js";
//gestionar reservas

//docuementación
/**
 * @swagger
 * tags:
 *  name: Reserves
 *  description: API para gestionar reservas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserve:
 *       type: object
 *       required:
 *         - tipo
 *         - fecha
 *         - hora
 *         - personas
 *       properties:
 *         id:
 *           type: string
 *           description: Id generado automáticamente por MongoDB
 *         tipo:
 *           type: string
 *           description: Tipo de reserva (VIP, normal)
 *         fecha:
 *           type: string
 *           description: Fecha estipulada para la reserva
 *         hora:
 *           type: string
 *           description: Hora estipulada para la reserva
 *         personas:
 *           type: number
 *           description: Número de personas que figuran en la reserva
 *       example:
 *         id: 23dssdsdds34ewraras234asa
 *         tipo: VIP
 *         fecha: 2023-04-29
 *         hora: 6:30 pm
 *         personas: 5
 */









//Rutas para gestionar reservas

/**
 * @swagger
 * /v2/reserves:
 *   get:
 *     summary: Lista todas las reservas
 *     tags: [Reserves]
 *     responses:
 *       200:
 *         description: Lista todas las reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserve'
 */
reservesRouter.get("/", listar);

/**
 * @swagger
 * /v2/reserves/{id}:
 *   get:
 *     summary: Obtiene una reserva por su id
 *     tags: [Reserves]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva a obtener
 *     responses:
 *       200:
 *         description: Reserva encontrada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserve'
 *       404:
 *         description: La reserva con el ID especificado no ha sido encontrada
 */
reservesRouter.get("/:id", listarUno);

/**
 * @swagger
 * /v2/reserves:
 *   post:
 *     summary: Agrega una reserva
 *     tags: [Reserves]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserve'
 *     responses:
 *       200:
 *         description: Reserva agregada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reserve'
 *       400:
 *         description: Todos los campos son requeridos
 */
reservesRouter.post("/", agregar);
/**
 * @swagger
 * /v2/reserves/{id}:
 *   put:
 *     summary: Reserva actualizada con éxito
 *     tags: [Reserves]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserve'
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *       404:
 *         description: La reserva con el ID especificado no fue editada
 */
reservesRouter.put("/:id", editar);

/**
 * @swagger
 * /v2/reserves/{id}:
 *   delete:
 *     summary: Elimina una reserva
 *     tags: [Reserves]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reserva a eliminar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserve'
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: La reserva con el ID especificado no fue eliminado
 */
reservesRouter.delete("/:id", eliminar);

//exportar router
export default  reservesRouter;





