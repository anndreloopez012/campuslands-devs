// validar.js - Bitácora de viajes extremos

const reservas = [
  { nombre: "Carlos Fuentes",  destino: "Interlaken",     actividad: "paracaidismo", edad: 25, costoBase: 850 },
  { nombre: "Lucía Mendoza",   destino: "Interlaken",     actividad: "paracaidismo", edad: 17, costoBase: 850 },
  { nombre: "Andrés Palma",    destino: "Queenstown",     actividad: "bungee",       edad: 20, costoBase: 400 },
  { nombre: "Sofía Recinos",   destino: "Moab",           actividad: "paracaidismo", edad: 18, costoBase: 750 },
  { nombre: "ReservaVacía",    destino: "",               actividad: "paracaidismo", edad: 0,  costoBase: 0  },
];

const IMPUESTO = 0.12;
const EDAD_MINIMA_PARACAIDISMO = 18;

function esReservaValida(reserva) {
  if (!reserva.nombre || !reserva.destino || !reserva.actividad) return false;
  if (reserva.edad <= 0 || reserva.costoBase <= 0) return false;
  if (reserva.actividad === "paracaidismo" && reserva.edad < EDAD_MINIMA_PARACAIDISMO) return false;
  return true;
}

function calcularCostoTotal(costoBase) {
  return costoBase + costoBase * IMPUESTO;
}

function procesarReservas(listaReservas) {
  const aprobadas = [];
  const rechazadas = [];

  for (const reserva of listaReservas) {
    if (esReservaValida(reserva)) {
      aprobadas.push({
        ...reserva,
        costoTotal: calcularCostoTotal(reserva.costoBase),
      });
    } else {
      rechazadas.push(reserva);
    }
  }

  return { aprobadas, rechazadas };
}

function mostrarResumen(aprobadas, rechazadas) {
  console.log("=== RESERVAS APROBADAS ===");
  if (aprobadas.length === 0) {
    console.log("Ninguna reserva aprobada.");
  } else {
    for (const r of aprobadas) {
      console.log(`✔ ${r.nombre} | ${r.actividad} en ${r.destino} | Edad: ${r.edad} | Total: Q${r.costoTotal.toFixed(2)}`);
    }
  }

  console.log("\n=== RESERVAS RECHAZADAS ===");
  if (rechazadas.length === 0) {
    console.log("Ninguna reserva rechazada.");
  } else {
    for (const r of rechazadas) {
      const razon =
        !r.nombre || !r.destino || !r.actividad || r.edad <= 0 || r.costoBase <= 0
          ? "datos incompletos o en cero"
          : `edad insuficiente para ${r.actividad} (${r.edad} años)`;
      console.log(`✘ ${r.nombre || "(sin nombre)"} — Razón: ${razon}`);
    }
  }
}

const { aprobadas, rechazadas } = procesarReservas(reservas);
mostrarResumen(aprobadas, rechazadas);
