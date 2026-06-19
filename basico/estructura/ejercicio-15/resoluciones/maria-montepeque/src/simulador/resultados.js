// Registro y cálculo de resultados por carrera

const tablasPuntos = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

function calcularPuntos(posicion) {
  if (posicion < 1 || posicion > tablasPuntos.length) {
    return 0;
  }
  return tablasPuntos[posicion - 1];
}

function registrarResultadoCarrera(nombrePiloto, posicion, tiempoSegundos) {
  if (!nombrePiloto || nombrePiloto.trim() === "") {
    return { error: "El nombre del piloto no puede estar vacío." };
  }

  if (tiempoSegundos <= 0) {
    return { error: "El tiempo debe ser mayor a cero segundos." };
  }

  const puntos = calcularPuntos(posicion);

  return {
    piloto: nombrePiloto,
    posicion: posicion,
    tiempoSegundos: tiempoSegundos,
    puntos: puntos
  };
}

module.exports = { calcularPuntos, registrarResultadoCarrera };
