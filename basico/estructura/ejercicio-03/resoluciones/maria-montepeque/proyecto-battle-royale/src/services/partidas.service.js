// src/services/partidas.service.js

const Partida = require("../models/partida.model");

const partidasRegistradas = [];

function crearPartida(datosPartida) {
  const nuevaPartida = new Partida({
    mapa: datosPartida.mapa,
    maximoEquipos: datosPartida.maximoEquipos || 25,
  });

  partidasRegistradas.push(nuevaPartida);
  return nuevaPartida;
}

function obtenerPartidas() {
  return partidasRegistradas;
}

module.exports = { crearPartida, obtenerPartidas };
