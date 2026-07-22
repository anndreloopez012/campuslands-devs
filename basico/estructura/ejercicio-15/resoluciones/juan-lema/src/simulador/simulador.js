const fs = require('fs');
const path = require('path');

function cargarJSON(rutaRelativa) {
  const ruta = path.join(__dirname, '..', '..', rutaRelativa);
  const contenido = fs.readFileSync(ruta, 'utf-8');
  return JSON.parse(contenido);
}

function calcularTiempoVuelta(vehiculo, pista) {
  // Formula simple: a mayor velocidad y manejo, menor tiempo por vuelta.
  const factorVelocidad = vehiculo.velocidadMax / 100;
  const factorManejo = vehiculo.manejo / 10;
  const tiempoBase = pista.largoKm * 60; // segundos base por km
  const tiempoVuelta = tiempoBase / (factorVelocidad * factorManejo);
  return Number(tiempoVuelta.toFixed(2));
}

function simularCarrera(pilotos, vehiculos, pista) {
  const resultados = [];

  pilotos.forEach((piloto) => {
    if (!piloto.vehiculoId) {
      console.log(`Piloto sin vehiculo, se omite del calculo: ${piloto.nombre}`);
      return;
    }

    const vehiculo = vehiculos.find((v) => v.id === piloto.vehiculoId);
    if (!vehiculo) {
      console.log(`Vehiculo no encontrado para ${piloto.nombre}, se omite del calculo`);
      return;
    }

    const tiempoVuelta = calcularTiempoVuelta(vehiculo, pista);
    const tiempoTotal = Number((tiempoVuelta * pista.vueltas).toFixed(2));

    resultados.push({
      pilotoId: piloto.id,
      nombre: piloto.nombre,
      vehiculo: vehiculo.nombre,
      tiempoTotalSegundos: tiempoTotal
    });
  });

  resultados.sort((a, b) => a.tiempoTotalSegundos - b.tiempoTotalSegundos);

  resultados.forEach((resultado, index) => {
    resultado.posicion = index + 1;
  });

  return resultados;
}

function main() {
  const pilotos = cargarJSON('data/pilotos/pilotos.json');
  const vehiculos = cargarJSON('data/vehiculos/vehiculos.json');
  const pistas = cargarJSON('data/pistas/pistas.json');

  const pistaSeleccionada = pistas[0];
  const resultados = simularCarrera(pilotos, vehiculos, pistaSeleccionada);

  const rutaSalida = path.join(__dirname, '..', '..', 'resultados', 'resultados.json');
  fs.writeFileSync(rutaSalida, JSON.stringify(resultados, null, 2));

  console.log(`Carrera simulada en: ${pistaSeleccionada.nombre}`);
  console.log(resultados);
}

main();
