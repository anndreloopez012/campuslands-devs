const IMPUESTO = 0.12;
const EDAD_MINIMA_PARACAIDISMO = 18;

const reservas = [
  { nombre: "Ana Gómez", destino: "Antigua Guatemala", actividad: "paracaidismo", edad: 25, costoBase: 800 },
  { nombre: "Luis Pérez", destino: "Semuc Champey", actividad: "senderismo", edad: 17, costoBase: 300 },
  { nombre: "Carla Ruiz", destino: "Volcán de Pacaya", actividad: "paracaidismo", edad: 16, costoBase: 900 },
  { nombre: "Diego Sosa", destino: "Río Dulce", actividad: "kayak", edad: 20, costoBase: 400 },
  { nombre: "Marta Lima", destino: "Tikal", actividad: "paracaidismo", edad: 18, costoBase: 850 },
];

function requiereEdadMinima(actividad) {
  return actividad === "paracaidismo";
}

function esReservaValida(reserva) {
  if (requiereEdadMinima(reserva.actividad)) {
    return reserva.edad >= EDAD_MINIMA_PARACAIDISMO;
  }
  return true;
}

function calcularCostoTotal(costoBase) {
  const impuesto = costoBase * IMPUESTO;
  return costoBase + impuesto;
}

function procesarReservas(listaReservas) {
  const aprobadas = [];
  const rechazadas = [];

  for (const reserva of listaReservas) {
    if (esReservaValida(reserva)) {
      const costoTotal = calcularCostoTotal(reserva.costoBase);
      aprobadas.push({
        nombre: reserva.nombre,
        destino: reserva.destino,
        actividad: reserva.actividad,
        edad: reserva.edad,
        costoBase: reserva.costoBase,
        costoTotal: Number(costoTotal.toFixed(2)),
      });
    } else {
      rechazadas.push({
        nombre: reserva.nombre,
        actividad: reserva.actividad,
        edad: reserva.edad,
        motivo: `Edad insuficiente para ${reserva.actividad} (mínimo ${EDAD_MINIMA_PARACAIDISMO})`,
      });
    }
  }

  return { aprobadas, rechazadas };
}

function generarResumen(aprobadas) {
  const totalReservas = aprobadas.length;
  const costoTotalGeneral = aprobadas.reduce((acumulado, r) => acumulado + r.costoTotal, 0);

  return {
    totalReservasAprobadas: totalReservas,
    costoTotalGeneral: Number(costoTotalGeneral.toFixed(2)),
    detalle: aprobadas,
  };
}

const { aprobadas, rechazadas } = procesarReservas(reservas);
const resumen = generarResumen(aprobadas);

console.log("Reservas aprobadas:");
console.log(resumen.detalle);

console.log("\nReservas rechazadas:");
console.log(rechazadas);

console.log("\nResumen general:");
console.log(`Total reservas aprobadas: ${resumen.totalReservasAprobadas}`);
console.log(`Costo total general: Q${resumen.costoTotalGeneral}`);