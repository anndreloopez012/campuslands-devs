// Página: Listado de destinos
// Responsabilidad: pedir los destinos al servicio y renderizar una CardDestino por cada uno.
// La página NO contiene lógica de negocio: solo orquesta vista + servicio.

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
