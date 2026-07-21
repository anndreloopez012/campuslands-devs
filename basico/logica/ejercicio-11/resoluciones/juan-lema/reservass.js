// Ejercicio 11 - Bitacora de viajes extremos
// Autor: Juan Lema

const IMPUESTO = 0.12;
const EDAD_MINIMA_PARACAIDISMO = 18;

// Entrada: lista de reservas de la agencia de turismo extremo
const reservas = [
  { nombre: "Andrea Poc", destino: "Interlaken, Suiza", actividad: "paracaidismo", edad: 25, costoBase: 450 },
  { nombre: "Diego Us", destino: "Queenstown, Nueva Zelanda", actividad: "bungee", edad: 17, costoBase: 300 },
  { nombre: "Karla Xitumul", destino: "Moab, Utah", actividad: "paracaidismo", edad: 16, costoBase: 500 },
  { nombre: "Pablo Son", destino: "Chamonix, Francia", actividad: "parapente", edad: 30, costoBase: 380 },
  { nombre: "Lucia Batz", destino: "Interlaken, Suiza", actividad: "paracaidismo", edad: 18, costoBase: 450 },
];

// Valida que la reserva cumpla la edad minima cuando la actividad es paracaidismo
function validarReserva(reserva) {
  if (reserva.actividad === "paracaidismo" && reserva.edad < EDAD_MINIMA_PARACAIDISMO) {
    return false;
  }
  return true;
}

// Aplica el impuesto del 12% al costo base y redondea a 2 decimales
function calcularCostoTotal(costoBase) {
  return Math.round(costoBase * (1 + IMPUESTO) * 100) / 100;
}

// Deja solo las reservas que pasaron la validacion
function filtrarValidas(listaReservas) {
  return listaReservas.filter(validarReserva);
}

// Construye el resumen final (nombre, destino, actividad, costo con impuesto)
function generarResumen(reservasValidas) {
  return reservasValidas.map((r) => ({
    nombre: r.nombre,
    destino: r.destino,
    actividad: r.actividad,
    costoTotal: calcularCostoTotal(r.costoBase),
  }));
}

// Salida: imprime el resumen en consola
function mostrarResumen(resumen) {
  if (resumen.length === 0) {
    console.log("No hay reservas validas para mostrar.");
    return;
  }
  resumen.forEach((r, i) => {
    console.log(`${i + 1}. ${r.nombre} - ${r.destino} - ${r.actividad} - Q${r.costoTotal}`);
  });
}

// --- Ejecucion caso normal ---
console.log("Caso normal:");
const reservasValidas = filtrarValidas(reservas);
const resumen = generarResumen(reservasValidas);
mostrarResumen(resumen);

// --- Ejecucion caso limite: lista vacia ---
console.log("\nCaso limite (lista vacia):");
mostrarResumen(generarResumen(filtrarValidas([])));

module.exports = { validarReserva, calcularCostoTotal, filtrarValidas, generarResumen };