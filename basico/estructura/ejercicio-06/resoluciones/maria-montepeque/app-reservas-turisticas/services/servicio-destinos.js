// Servicio: destinos
// Responsabilidad: leer y filtrar los datos de destinos.
// Es la ÚNICA capa que toca data/destinos.json; las páginas nunca lo leen directo.

const catalogoDestinos = require('../data/destinos.json');

function obtenerDestinos() {
  return catalogoDestinos.destinos || [];
}

function obtenerDestinosConCupo() {
  return obtenerDestinos().filter((destino) => destino.cuposDisponibles > 0);
}

function buscarDestinoPorId(idDestino) {
  if (!idDestino) {
    return null; // caso límite: id vacío
  }
  return obtenerDestinos().find((destino) => destino.id === idDestino) || null;
}

module.exports = { obtenerDestinos, obtenerDestinosConCupo, buscarDestinoPorId };
