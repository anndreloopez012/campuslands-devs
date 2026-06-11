// Servicio: destinos

const catalogoDestinos = require('../data/destinos.json');

function obtenerDestinos() {
  return catalogoDestinos.destinos || [];
}

function obtenerDestinosConCupo() {
  return obtenerDestinos().filter((destino) => destino.cuposDisponibles > 0);
}

function buscarDestinoPorId(idDestino) {
  if (!idDestino) {
    return null; 
  }
  return obtenerDestinos().find((destino) => destino.id === idDestino) || null;
}

module.exports = { obtenerDestinos, obtenerDestinosConCupo, buscarDestinoPorId };
