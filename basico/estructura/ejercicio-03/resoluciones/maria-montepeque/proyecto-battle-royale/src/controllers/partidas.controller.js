// src/controllers/partidas.controller.js

const partidasService = require("../services/partidas.service");

function crearPartida(req, res) {
  const datosPartida = req.body;

  if (!datosPartida || !datosPartida.mapa) {
    return res.status(400).json({ error: "El campo 'mapa' es obligatorio" });
  }

  const partidaCreada = partidasService.crearPartida(datosPartida);
  return res.status(201).json(partidaCreada);
}

function obtenerPartidas(req, res) {
  const listaPartidas = partidasService.obtenerPartidas();
  return res.status(200).json(listaPartidas);
}

module.exports = { crearPartida, obtenerPartidas };
