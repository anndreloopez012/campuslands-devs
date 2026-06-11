// src/routes/partidas.routes.js

const express = require("express");
const router = express.Router();
const partidasController = require("../controllers/partidas.controller");

router.get("/partidas", partidasController.obtenerPartidas);

router.post("/partidas", partidasController.crearPartida);

module.exports = router;
