// Página: Listado de destinos

const servicioDestinos = require('../services/servicio-destinos');

function renderizarListadoDestinos() {
  const destinosDisponibles = servicioDestinos.obtenerDestinos();

  if (destinosDisponibles.length === 0) {
    return 'No hay destinos disponibles por el momento.';
  }

  return destinosDisponibles
    .map((destino) => `CardDestino -> ${destino.nombre} ($${destino.precioPorNoche}/noche)`)
    .join('\n');
}

module.exports = { renderizarListadoDestinos };
