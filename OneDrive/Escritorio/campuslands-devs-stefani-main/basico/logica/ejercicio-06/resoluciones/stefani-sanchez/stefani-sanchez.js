// Nombre: Stefani Sanchez
// Ejercicio 06 - Reservas de turismo de aventura
//
// Razonamiento: Se valida la edad minima para actividades peligrosas (paracaidismo >= 18).
// Se aplica impuesto del 12% al costoBase y se filtran reservas no validas.

const reservas = [
  { nombre: "Ana Lopez",    destino: "Antigua",   actividad: "paracaidismo", edad: 22, costoBase: 800 },
  { nombre: "Luis Ramos",   destino: "Peten",      actividad: "kayak",        edad: 16, costoBase: 350 },
  { nombre: "Maria Giron",  destino: "Livingston", actividad: "paracaidismo", edad: 17, costoBase: 800 },
  { nombre: "Pedro Cruz",   destino: "Coban",      actividad: "senderismo",   edad: 14, costoBase: 200 },
  { nombre: "Sara Mendez",  destino: "Xela",       actividad: "rappel",       edad: 20, costoBase: 450 },
  { nombre: "Diego Pac",    destino: "Izabal",     actividad: "kayak",        edad: 25, costoBase: 350 },
];

const EDAD_MINIMA_PARACAIDISMO = 18;
const IMPUESTO = 0.12;

function validarReserva(reserva) {
  if (reserva.actividad === "paracaidismo" && reserva.edad < EDAD_MINIMA_PARACAIDISMO) {
    return false;
  }
  return true;
}

function procesarReservas(lista) {
  const validas    = [];
  const invalidas  = [];

  lista.forEach(reserva => {
    if (validarReserva(reserva)) {
      const costoConImpuesto = reserva.costoBase * (1 + IMPUESTO);
      validas.push({ ...reserva, costoFinal: costoConImpuesto.toFixed(2), valida: true });
    } else {
      invalidas.push({ ...reserva, motivo: "Edad minima no cumplida para paracaidismo (18 anos)", valida: false });
    }
  });

  return { validas, invalidas };
}

const resultado = procesarReservas(reservas);

console.log("=== RESERVAS VALIDAS ===");
resultado.validas.forEach(r => {
  console.log(`${r.nombre} | ${r.actividad} | ${r.destino} | Costo: Q${r.costoFinal}`);
});

console.log("\n=== RESERVAS RECHAZADAS ===");
resultado.invalidas.forEach(r => {
  console.log(`${r.nombre} | ${r.actividad} | Motivo: ${r.motivo}`);
});

// Validacion: persona de 17 anos no aprueba paracaidismo
console.log("\nValidacion: 17 anos en paracaidismo =>", validarReserva({ actividad: "paracaidismo", edad: 17 }), "(esperado false)");
console.log("Validacion: impuesto 12% sobre 800 =>", (800 * 1.12).toFixed(2), "(esperado 896.00)");
