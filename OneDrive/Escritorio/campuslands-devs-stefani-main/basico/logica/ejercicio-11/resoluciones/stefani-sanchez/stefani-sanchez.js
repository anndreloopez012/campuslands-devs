// Nombre: Stefani Sanchez
// Ejercicio 11 - Turismo de aventura (validar reservas y calcular costo)
//
// Razonamiento: Se valida edad minima para paracaidismo (>= 18).
// Se aplica impuesto del 12% al costoBase. Se filtran reservas no validas.

const reservas = [
  { nombre: "Carlos Vega",   destino: "Atitlan",    actividad: "paracaidismo",  edad: 25, costoBase: 1200 },
  { nombre: "Sofia Lima",    destino: "Semuc",      actividad: "senderismo",    edad: 15, costoBase:  400 },
  { nombre: "Javier Rios",   destino: "Coban",      actividad: "paracaidismo",  edad: 16, costoBase: 1200 },
  { nombre: "Lucia Paz",     destino: "Rio Dulce",  actividad: "kayak",         edad: 18, costoBase:  600 },
  { nombre: "Andres Mejia",  destino: "Livingston", actividad: "paracaidismo",  edad: 30, costoBase: 1200 },
  { nombre: "Valeria Soto",  destino: "Quetzal",    actividad: "ciclismo",      edad: 13, costoBase:  300 },
];

const REGLAS_EDAD = {
  paracaidismo: 18,
};

function esReservaValida(reserva) {
  const edadMinima = REGLAS_EDAD[reserva.actividad];
  if (edadMinima && reserva.edad < edadMinima) {
    return { valida: false, motivo: `Se requieren al menos ${edadMinima} anos para ${reserva.actividad}` };
  }
  return { valida: true };
}

function calcularCosto(costoBase) {
  const impuesto = costoBase * 0.12;
  return costoBase + impuesto;
}

function procesarReservas(lista) {
  const validas   = [];
  const invalidas = [];

  lista.forEach(reserva => {
    const { valida, motivo } = esReservaValida(reserva);
    if (valida) {
      validas.push({ ...reserva, costoFinal: calcularCosto(reserva.costoBase).toFixed(2) });
    } else {
      invalidas.push({ ...reserva, motivo });
    }
  });

  return { validas, invalidas };
}

const resultado = procesarReservas(reservas);

console.log("=== RESERVAS VALIDAS ===");
resultado.validas.forEach(r => {
  console.log(`${r.nombre} | ${r.actividad} | ${r.destino} | Total con impuesto: Q${r.costoFinal}`);
});

console.log("\n=== RESERVAS RECHAZADAS ===");
resultado.invalidas.forEach(r => {
  console.log(`${r.nombre} | ${r.actividad} | Motivo: ${r.motivo}`);
});

// Validacion: 17 anos en paracaidismo -> invalida
const testValida = esReservaValida({ actividad: "paracaidismo", edad: 17 });
console.log(`\nValidacion: 17 anos en paracaidismo => valida: ${testValida.valida} (esperado false)`);
console.log(`Validacion: 12% sobre 1200 => Q${calcularCosto(1200).toFixed(2)} (esperado 1344.00)`);
