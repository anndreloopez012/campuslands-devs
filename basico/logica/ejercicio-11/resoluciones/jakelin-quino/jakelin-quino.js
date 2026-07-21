// Bitácora de viajes extremos: validar edad mínima, agregar 12% de impuesto y filtrar reservas
const reservas = [
  { nombre: "Ana", destino: "Suiza", actividad: "paracaidismo", edad: 22, costoBase: 300 },
  { nombre: "Luis", destino: "Canadá", actividad: "bungee", edad: 19, costoBase: 250 },
  { nombre: "Pedro", destino: "Nepal", actividad: "paracaidismo", edad: 17, costoBase: 350 },
  { nombre: "María", destino: "Chile", actividad: "rafting", edad: 25, costoBase: 180 },
  { nombre: "Carlos", destino: "Brasil", actividad: "paracaidismo", edad: 16, costoBase: 400 }
];

// Función para validar si es apto (paracaidismo necesita 18+)
function validarReserva(reserva) {
  if (reserva.actividad === "paracaidismo" && reserva.edad < 18) {
    return false;
  }
  return true;
}

// Filtrar reservas válidas
const validas = reservas.filter(validarReserva);

// Agregar impuesto del 12% a cada reserva
const conImpuesto = validas.map(r => ({
  ...r,
  costoTotal: r.costoBase * 1.12
}));

// Mostrar resumen
console.log("=== RESERVAS APROBADAS ===");
conImpuesto.forEach(r => {
  console.log(`${r.nombre} - ${r.destino} (${r.actividad}) - Edad: ${r.edad} - Total: $${r.costoTotal.toFixed(2)}`);
});

console.log("\n=== RESERVAS RECHAZADAS ===");
const rechazadas = reservas.filter(r => !validarReserva(r));
rechazadas.forEach(r => {
  console.log(`${r.nombre} - ${r.actividad} - Edad: ${r.edad} - Motivo: Edad mínima 18 años`);
});